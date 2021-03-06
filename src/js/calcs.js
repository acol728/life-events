import R from 'ramda';
// import finance from 'financejs'
// import $ from 'jquery'
import d3 from 'd3';
// import d3Axis from 'd3-axis'
import CONSTANTS from './questions/constants';

const {
  OCCUPATIONAL_DATA, EDUCATIONAL_DATA, DEFAULT_AGE, DEFAULT_COLLEGE_START_AGE, DEFAULT_RETIREMENT_AGE, DEFAULT_COLA_ADJ, TAX_INFO
} = CONSTANTS;
const { TAX_BRACKETS } = TAX_INFO;
const MONTHS = 12;

const createChart = () => {
  const scale = d3.scaleLinear()
    .domain([10, 130])
    .range([0, 960]);
  const axis = d3.axisLeft(scale);
  d3.select('.chart')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 30)
    .append('g')
    .attr('transform', 'translate(0,30)')
    .call(axis);
};

const getTotalExpenses = (lengthOfVacations, numberOfVacations, dailyCoffee, numOfDependents) => { //, otherExpenses) => {
  const age = state.ui.values.currentAgeInput || DEFAULT_AGE;
  const rAge = state.ui.values.retirementAgeInput || DEFAULT_RETIREMENT_AGE;
  const inflation = 1.03;
  let coffeePerYear = 1460;
  let vacationCost = 200;
  const numOfDependent = numOfDependents || 1;
  let result = 0;
  for (let i = 0; i <= rAge - age; i += 1) {
    result += vacationCost * numberOfVacations * lengthOfVacations * numOfDependent;
    // result += otherExpenses;
    // otherExpenses *= inflation;
    vacationCost *= inflation;
    if (dailyCoffee) {
      result += coffeePerYear;
      coffeePerYear *= inflation;
    }
  }
  coffeePerYear = 1460;
  vacationCost = 200;
  return result;
};

const calculateCollege = (numOfYears, costPerYear) => numOfYears * costPerYear;

const calculateLifestyle = (housingCosts, transportationCosts, leisureCosts) => {
  const age = state.ui.values.currentAgeInput || DEFAULT_AGE;
  const rAge = state.ui.values.retirementAgeInput || DEFAULT_RETIREMENT_AGE;
  const inflation = 1.02;
  let housingCost = housingCosts || 0;
  let transportationCost = transportationCosts || 0;
  let leisureCost = leisureCosts || 0;
  let result = 0;
  for (let i = 0; i <= rAge - age; i += 1) {
    result += (housingCost * MONTHS) + (transportationCost * MONTHS) + (leisureCost * MONTHS);
    housingCost *= inflation;
    transportationCost *= inflation;
    leisureCost *= inflation;
  }

  return result;
};

const calculateFunds = () => {
  const age = state.ui.values.currentAgeInput || DEFAULT_AGE;
  // Added in a default retirment age of 65
  // Feel free to change this, or to make it more dynamic by using a constant variable instead of "65"
  const rAge = state.ui.values.retirementAgeInput || 65;
  const initialFunds = state.ui.values.networthInput || 0;
  const currentAnnualIncome = state.ui.values.currentAnnualIncomeInput || 0;
  const careerId = state.ui.values.careerInput || '';

  const dailyCoffee = state.ui.values.dailyCoffee || false;
  const numOfVacations = parseInt(state.ui.values.numberOfVacations, 10) || 0;
  const lengthOfVacations = parseInt(state.ui.values.lengthOfVacations, 10) || 0;
  const numOfDependents = parseInt(state.ui.values.numberOfDependentsInput, 10) + 1;

  const housingCosts = parseInt(state.ui.values.housingCostsInput, 10) || 0;
  const transportationCosts = parseInt(state.ui.values.numberOfCarsInput, 10) || 0;
  const leisureCosts = parseInt(state.ui.values.subscriptionSlider, 10) || 0;

  const numberOfYearsCollege = parseInt(state.ui.values.yearsEnrolledInput, 10) || 0;
  const costOfCollegePerYear = parseInt(state.ui.values.tuitionCostInput, 10) || 0;

  const careerData = createCareerData(careerId);
  const currentSalary = isInCareer(age, careerData.educationLevel) ? careerData.startingCareerSalary : currentAnnualIncome;
  let federalTaxBracket = getFederalTaxBracket(TAX_INFO.INDV, careerData.startingCareerSalary);
  let stateTaxBracket = getStateTaxBracket(TAX_INFO.INDV, 'WI', careerData.startingCareerSalary);

  const netIncome = calcNetIncome({ federalTaxBracket, stateTaxBracket }, currentSalary);
  let monthly = R.times(calcMonthlyData(initialFunds, currentSalary, federalTaxBracket, stateTaxBracket), MONTHS);
  let money = [
    {
      age,
      currentAnnualSalary: currentSalary,
      netAnnualIncome: netIncome,
      monthly,
      totalNetworth: initialFunds + netIncome
    }];
  const workingYears = R.takeLast(rAge - age, R.times(R.identity, rAge + 1));

  const expenses = getTotalExpenses(lengthOfVacations, numOfVacations, dailyCoffee, numOfDependents);
  const educationCost = calculateCollege(numberOfYearsCollege, costOfCollegePerYear);
  const lifestyleCost = calculateLifestyle(housingCosts, transportationCosts, leisureCosts);

  money = R.reduce((accum, currentAge) => {
    const year = currentAge - age;
    const lastYear = R.last(accum) || {};
    const inCareer = isInCareer(currentAge, careerData.educationLevel);
    // Currently still using 'year' as # years after the age entered. Not the # of years starting the career
    const currentAnnualSalary = inCareer ? calcSalaryWithCOLA(careerData.startingCareerSalary, year) : calcSalaryWithCOLA(currentAnnualIncome, year);

    federalTaxBracket = getFederalTaxBracket(TAX_INFO.INDV, currentAnnualSalary);
    stateTaxBracket = getStateTaxBracket(TAX_INFO.INDV, 'WI', currentAnnualSalary);
    const netAnnualIncome = calcNetIncome({ federalTaxBracket, stateTaxBracket }, currentAnnualSalary);
    monthly = R.times(calcMonthlyData(lastYear.totalNetworth, currentAnnualSalary, federalTaxBracket, stateTaxBracket), MONTHS);

    return [...accum, {
      age: currentAge,
      currentAnnualSalary,
      netAnnualIncome,
      monthly,
      totalNetworth: lastYear.totalNetworth + netAnnualIncome,
      expenses,
      educationCost,
      lifestyleCost
    }];
  }, money)(workingYears);

  return (money);
};

export default {
  createChart,
  calculateFunds
};

const createCareerData = (careerId) => {
  const findCareer = R.find(job => job.id === careerId);
  const result = {

  };
  if (!R.isEmpty(careerId)) {
    const careerObj = findCareer(OCCUPATIONAL_DATA);
    result.startingCareerSalary = careerObj ? careerObj.salary : 0;
    result.educationLevel = R.find(edu => edu.id === careerObj.education, EDUCATIONAL_DATA);
  }

  return result;
};

const getFederalTaxBracket = (indvOrJoint, taxibleEarnings) => {
  const taxData = indvOrJoint === TAX_BRACKETS.JOINT ? TAX_BRACKETS.FEDERAL.JOINT : TAX_BRACKETS.FEDERAL.INDV;
  return R.reduce((accum, item) => {
    if (taxibleEarnings >= item.maxEarnings) { return item; }
    return accum;
  }, taxData[0])(taxData);
};

const getStateTaxBracket = (indvOrJoint, stateCode = 'WI', taxibleIncome) => {
  const taxData = indvOrJoint === TAX_BRACKETS.JOINT ? TAX_BRACKETS.STATE[stateCode].JOINT : TAX_BRACKETS.STATE[stateCode].INDV;

  return R.reduce((accum, item) => {
    if (taxibleIncome >= item.maxEarnings) { return item; }
    return accum;
  }, taxData[0])(taxData);
};

const isInCareer = (age, educationLevel) => !!educationLevel && (age >= ((educationLevel.years || 0) + DEFAULT_COLLEGE_START_AGE));

const calcNetIncome = ({ federalTaxBracket, stateTaxBracket }, taxibleIncome) =>
  taxibleIncome - (taxibleIncome * (federalTaxBracket.percent)) - (taxibleIncome * (stateTaxBracket.percent));

const calcSalaryWithCOLA = (startingSalary, currentYear) => startingSalary * (1 + (DEFAULT_COLA_ADJ / 1)) ** currentYear;

const calcMonthlyData = R.curry((lastYearNW, currentSalary, federalTaxBracket, stateTaxBracket, month) => {
  const currentMonthlySalary = currentSalary / MONTHS;
  const netIncome = calcNetIncome({ federalTaxBracket, stateTaxBracket }, currentMonthlySalary);
  return {
    month: month + 1,
    currentMonthlySalary,
    netIncome,
    totalNetworth: lastYearNW + (netIncome * (month + 1))
  };
});
