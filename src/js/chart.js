import R from 'ramda'
// import finance from 'financejs'
// import $ from 'jquery'
import d3 from 'd3'
// import d3Axis from 'd3-axis'
import CONSTANTS from './questions/constants'

const {
	OCCUPATIONAL_DATA, DEFAULT_AGE, DEFAULT_DEATH_AGE, DEFAULT_COLA_ADJ
} = CONSTANTS

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
	let startingSalary = 0

	if (!R.isEmpty(careerId)) {
		const careerObj = findCareer(OCCUPATIONAL_DATA)

		startingSalary = careerObj ? careerObj.salary : 0
	}

	const calcMonthlyData = R.curry((lastYearNW, salary, month) => {
		const currentMonthlySalary = salary / MONTHS
		return {
			month: month + 1,
			currentMonthlySalary,
			totalNetworth: lastYearNW + (currentMonthlySalary * (month + 1))
		}
	})

	let money = [
		{
			age,
			currentSalary: startingSalary,
			monthly: R.times(calcMonthlyData(initialFunds, startingSalary), MONTHS),
			totalNetworth: initialFunds + startingSalary
		}]

	const years = R.takeLast(DEFAULT_DEATH_AGE - age, R.times(R.identity, DEFAULT_DEATH_AGE + 1))
	money = R.reduce((accum, currentAge) => {
		const year = currentAge - age
		const lastYear = R.last(accum) || {}
		const currentAnnualSalary = (startingSalary * (1 + (DEFAULT_COLA_ADJ / 1)) ** year)

		return [...accum, {
			age: currentAge,
			currentAnnualSalary,
			monthly: R.times(calcMonthlyData(lastYear.totalNetworth, currentAnnualSalary), MONTHS),
			totalNetworth: lastYear.totalNetworth + currentAnnualSalary
		}]
	}, money)(years)

	return money
}

export default {
	createChart,
	calculateFunds
}
