/* eslint no-console: "off" */
import CONSTANTS from './constants';
import { setInputEvents, selectInputClickEvent } from './helpers';
import changeEvents from './changeEvents';

const {
  WELCOME_PAGE, INITIAL_PAGE, CAREER_PLANS_PAGE, LIFESTYLE_PAGE, LEISURE_PAGE, RETIREMENT_PLANS_PAGE
} = CONSTANTS.IDs.PAGE_IDS;
const { QUESTION_IDS } = CONSTANTS.IDs;
const {
  HOUSING_COSTS_DATA, NUMBER_OF_VACATIONS_DATA, LENGTH_OF_VACATIONS_DATA, SUBSCRIPTION_DATA, COFFEE_DATA, COLLEGE_DATA, YEARS_ENROLLED_DATA, TUITION_COST_DATA
} = CONSTANTS;

const welcomePage = {
  id: WELCOME_PAGE,
  nav: 'Welcome',
  title: 'Welcome',
  subtitle: 'The Life Events Financial Calculator will help you see how the big decisions that you make throughout your life will effect your financial well-being.',
  subtitle2: 'Lets get started!',
  show: true
};

const initialInfoPage = {

  id: INITIAL_PAGE,
  nav: 'Get Started',
  title: "Let's start with where you are at...",
  show: false,
  questions: [
    {
      id: QUESTION_IDS[INITIAL_PAGE].CURRENT_AGE_TEXT,
      placeholder: 'Current Age',
      info: 'Current age',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].CURRENT_AGE_TEXT]
    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT,
      placeholder: 'Retirement Age',
      info: 'Retirement age',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT]
    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT,
      placeholder: 'Networth',
      info: 'Initial Net Worth',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]
    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT,
      placeholder: 'Annual Income',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT]
    }
  ]
};

const careerPlansPage = {
  id: CAREER_PLANS_PAGE,
  nav: 'Education',
  title: 'What is your level of education...',
  show: false,
  questions: [
    {
      id: QUESTION_IDS[CAREER_PLANS_PAGE].COLLEGE_RADIO,
      label: 'Did you go to college?',
      show: true,
      placeholder: 'Did you go to college?',
      info: 'College',
      type: 'radio',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].COLLEGE_RADIO],
      values: COLLEGE_DATA
    },
    {
      id: QUESTION_IDS[CAREER_PLANS_PAGE].YEARS_ENROLLED_TEXT,
      label: 'Years enrolled',
      show: true,
      placeholder: 'Years enrolled',
      info: 'Years Enrolled',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].YEARS_ENROLLED_TEXT],
      values: YEARS_ENROLLED_DATA
    },
    {
      id: QUESTION_IDS[CAREER_PLANS_PAGE].TUITION_COST_TEXT,
      label: 'Cost per year',
      show: true,
      placeholder: 'Cost per year',
      info: 'Tuition',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].TUITION_COST_TEXT],
      values: TUITION_COST_DATA
    }
  ]
};

const lifestylePage = {
  id: 'lifestylePage',
  nav: 'Lifestyle',
  title: 'How do you want to live...',
  show: false,
  required: true,
  questions: [
    {
      id: QUESTION_IDS[LIFESTYLE_PAGE].HOUSING_COSTS_TEXT,
      label: 'Housing costs per month',
      show: true,
      placeholder: 'Housing costs per month',
      info: 'Housing',
      type: 'text',
      changeEvent: changeEvents[QUESTION_IDS[LIFESTYLE_PAGE].HOUSING_COSTS_TEXT],
      values: HOUSING_COSTS_DATA
    },
    {
      id: QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT,
      label: 'Transportation costs per month',
      show: true,
      placeholder: 'Transportation costs per month',
      info: 'Transportation costs per month',
      type: 'text',
      changeEvent: changeEvents[QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT]
    },
    {
      id: QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT,
      label: 'Number of Dependents',
      show: true,
      placeholder: 'Number of dependents',
      info: 'Number of Dependents',
      type: 'text',
      changeEvent: changeEvents[QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT]
    },
    {
      id: QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_PETS_TEXT,
      label: 'Number of Pets',
      show: true,
      placeholder: 'Number of pets',
      info: 'Number of Pets',
      type: 'text',
      changeEvent: changeEvents[QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_PETS_TEXT]
    }
  ]
};

const leisurePage = {
  id: 'leisurePage',
  nav: 'Leisure',
  title: 'What do you do for fun...',
  show: false,
  required: true,
  questions: [
    {
      id: QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_VACATIONS_DROPDOWN,
      label: 'Number of Vacations Per Year',
      show: true,
      placeholder: 'Select number of years...',
      info: 'numberOfVacations',
      type: 'select-dropdown',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_VACATIONS_DROPDOWN],
      values: NUMBER_OF_VACATIONS_DATA
    },
    {
      id: QUESTION_IDS[LEISURE_PAGE].LENGTH_OF_VACATIONS_DROPDOWN,
      label: 'Average Vacation Length',
      show: true,
      placeholder: 'Select length...',
      info: 'lengthOfVacations',
      type: 'select-dropdown',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[LEISURE_PAGE].LENGTH_OF_VACATIONS_DROPDOWN],
      values: LENGTH_OF_VACATIONS_DATA
    },
    {
      id: QUESTION_IDS[LEISURE_PAGE].SUBSCRIPTION_DROPDOWN,
      label: 'Amount paid to subscriptions each month',
      show: true,
      placeholder: 'Choose amount',
      info: 'subscriptions',
      type: 'select-dropdown',
      changeEvent: changeEvents[QUESTION_IDS[LEISURE_PAGE].SUBSCRIPTION_DROPDOWN],
      values: SUBSCRIPTION_DATA
    },
    {
      id: QUESTION_IDS[LEISURE_PAGE].COFFEE_RADIO,
      label: 'Daily coffee?',
      show: true,
      info: 'dailyCoffee',
      type: 'radio',
      changeEvent: changeEvents[QUESTION_IDS[LEISURE_PAGE].COFFEE_RADIO],
      values: COFFEE_DATA
    }
  ]
};

const retirementPlansPage = {
  id: RETIREMENT_PLANS_PAGE,
  nav: 'Retirement',
  title: 'What are your retirement plans...',
  show: false,
  required: true,
  questions: [
    {
      id: '401KInput',
      placeholder: '401K / Month',
      info: '401K',
      type: 'text'
    }
  ]
};

const pages = [
  welcomePage,
  initialInfoPage,
  careerPlansPage,
  lifestylePage,
  leisurePage,
  retirementPlansPage
];

export { setInputEvents, selectInputClickEvent };

export default pages;
