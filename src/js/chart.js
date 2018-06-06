import R from 'ramda'
// import finance from 'financejs'
// import $ from 'jquery'
import d3 from 'd3'
// import d3Axis from 'd3-axis'
import CONSTANTS from './questions/constants'

const {
	OCCUPATIONAL_DATA, EDUCATIONAL_DATA, DEFAULT_AGE, DEFAULT_COLLEGE_START_AGE, DEFAULT_RETIREMENT_AGE, DEFAULT_COLA_ADJ, TAX_INFO
} = CONSTANTS
const { TAX_BRACKETS } = TAX_INFO

const createChart = () => {
	const scale = d3.scaleLinear()
		.domain([10, 130])
		.range([0, 960])
	const axis = d3.axisLeft(scale)
	d3.select('.chart')
		.append('svg')
		.attr('width', 1000)
		.attr('height', 30)
		.append('g')
		.attr('transform', 'translate(0,30)')
		.call(axis);
}

const calculateFunds = () => {
	const MONTHS = 12
	const age = state.ui.values.ageInput || DEFAULT_AGE
	const initialFunds = state.ui.values.networthInput || 0
	const careerId = state.ui.values.careerInput || ''
	const findCareer = R.find(job => job.id === careerId)
	let educationLevel = {}
	let startingSalary = 0

	if (!R.isEmpty(careerId)) {
		const careerObj = findCareer(OCCUPATIONAL_DATA)
		startingSalary = careerObj ? careerObj.salary : 0
		educationLevel = R.find(edu => edu.id === careerObj.education, EDUCATIONAL_DATA)
	}

	const calcMonthlyData = R.curry((currentAge, eduLevel, lastYearNW, salary, federalTaxBracket, stateTaxBracket, month) => {
		const currentMonthlySalary = isInCareer(currentAge, eduLevel) ? salary / MONTHS : 0
		const netIncome = calcNetIncome({ federalTaxBracket, stateTaxBracket }, currentMonthlySalary)
		return {
			month: month + 1,
			currentMonthlySalary,
			netIncome,
			totalNetworth: lastYearNW + (netIncome * (month + 1))
		}
	})

	let federalTaxBracket = getFederalTaxBracket(TAX_INFO.INDV, startingSalary)
	let stateTaxBracket = getStateTaxBracket(TAX_INFO.INDV, 'WI', startingSalary)

	const netIncome = isInCareer(age, educationLevel) ? calcNetIncome({ federalTaxBracket, stateTaxBracket }, startingSalary) : 0
	let money = [
		{
			age,
			currentSalary: netIncome,
			monthly: R.times(calcMonthlyData(age, educationLevel, initialFunds, startingSalary, federalTaxBracket, stateTaxBracket), MONTHS),
			netAnnualIncome: netIncome,
			totalNetworth: initialFunds + netIncome
		}]

	const workingYears = R.takeLast(DEFAULT_RETIREMENT_AGE - age, R.times(R.identity, DEFAULT_RETIREMENT_AGE + 1))

	money = R.reduce((accum, currentAge) => {
		const year = currentAge - age
		const lastYear = R.last(accum) || {}
		// Currently still using 'year' as # years after the age entered. Not the # of years starting the career
		const currentAnnualSalary = isInCareer(currentAge, educationLevel) ? (startingSalary * (1 + (DEFAULT_COLA_ADJ / 1)) ** year) : 0

		federalTaxBracket = getFederalTaxBracket(TAX_INFO.INDV, currentAnnualSalary)
		stateTaxBracket = getStateTaxBracket(TAX_INFO.INDV, 'WI', currentAnnualSalary)
		const netAnnualIncome = calcNetIncome({ federalTaxBracket, stateTaxBracket }, currentAnnualSalary)

		return [...accum, {
			age: currentAge,
			currentAnnualSalary,
			netAnnualIncome,
			monthly: R.times(calcMonthlyData(currentAge, educationLevel, lastYear.totalNetworth, currentAnnualSalary, federalTaxBracket, stateTaxBracket), MONTHS),
			totalNetworth: lastYear.totalNetworth + netAnnualIncome
		}]
	}, money)(workingYears)

	return money
}

export default {
	createChart,
	calculateFunds
}

const getFederalTaxBracket = (indvOrJoint, taxibleEarnings) => {
	const taxData = indvOrJoint === TAX_BRACKETS.JOINT ? TAX_BRACKETS.FEDERAL.JOINT : TAX_BRACKETS.FEDERAL.INDV
	return R.reduce((accum, item) => {
		if (taxibleEarnings >= item.maxEarnings) { return item }
		return accum
	}, taxData[0])(taxData)
}

const getStateTaxBracket = (indvOrJoint, stateCode = 'WI', taxibleIncome) => {
	const taxData = indvOrJoint === TAX_BRACKETS.JOINT ? TAX_BRACKETS.STATE[stateCode].JOINT : TAX_BRACKETS.STATE[stateCode].INDV

	return R.reduce((accum, item) => {
		if (taxibleIncome >= item.maxEarnings) { return item }
		return accum
	}, taxData[0])(taxData)
}

const isInCareer = (age, educationLevel) => {
	const careerStartAge = (educationLevel.years || 0) + DEFAULT_COLLEGE_START_AGE
	return age >= careerStartAge
}

const calcNetIncome = ({ federalTaxBracket, stateTaxBracket }, taxibleIncome) =>
	taxibleIncome - (taxibleIncome * (federalTaxBracket.percent)) - (taxibleIncome * (stateTaxBracket.percent))
