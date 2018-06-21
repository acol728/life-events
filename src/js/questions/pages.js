/* eslint no-console: "off" */
import CONSTANTS from './constants';
import { setInputEvents, selectInputClickEvent } from './helpers';
import changeEvents from './changeEvents';

const {
  WELCOME_PAGE, INITIAL_PAGE, CAREER_PLANS_PAGE, LIFESTYLE_PLANS_PAGE, LEISURE_PAGE, RETIREMENT_PLANS_PAGE
} = CONSTANTS.IDs.PAGE_IDS;
const { QUESTION_IDS } = CONSTANTS.IDs;
const {
  OCCUPATIONAL_DATA, EDU_PUBLIC_PRIVATE_DATA, HOUSING_OPTIONS_DATA, NUMBER_OF_VACATIONS_DATA, LENGTH_OF_VACATIONS_DATA, SUBSCRIPTION_DATA
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
      id: QUESTION_IDS[INITIAL_PAGE].AGE_TEXT,
      placeholder: 'Age',
      info: 'Starting age',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]

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
  nav: 'Career',
  title: 'What are your aspirations...',
  show: false,
  questions: [
    {
      id: QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN,
      label: 'Career',
      show: true,
      placeholder: 'Choose a Career...',
      info: 'Career',
      type: 'select-dropdown',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN],
      values: OCCUPATIONAL_DATA
    },
    {
      id: QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO,
      label: 'Education',
      show: false,
      placeholder: 'Choose a type of school...',
      info: 'Public or Private',
      type: 'radio',
      required: false,
      changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO],
      values: EDU_PUBLIC_PRIVATE_DATA
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
      id: QUESTION_IDS[LIFESTYLE_PLANS_PAGE].MORTGAGE_RENT_RADIO,
      label: 'Mortgage / Rent',
      show: true,
      placeholder: 'Choose a type housing...',
      info: 'Housing',
      type: 'radio',
      changeEvent: changeEvents[QUESTION_IDS[LIFESTYLE_PLANS_PAGE].MORTGAGE_RENT_RADIO],
      values: HOUSING_OPTIONS_DATA
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
      id: QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_CARS_TEXT,
      label: 'Number of Cars',
      show: true,
      placeholder: 'Enter number...',
      info: 'Vehicles',
      type: 'text'
      // changeEvent: changeEvents[QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_CARS_TEXT],
      // values: HOUSING_OPTIONS_DATA
    },
    {
      id: QUESTION_IDS[LEISURE_PAGE].AMOUNT_TO_SUBSCRIPTIONS,
      label: 'Amount paid to subscriptions/month',
      show: true,
      placeholder: 'Choose amount...',
      info: 'Subscriptions',
      type: 'select-dropdown',
      values: SUBSCRIPTION_DATA
    },
    {
      id: QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_VACATIONS_DROPDOWN,
      label: 'Number of Vacations Per Year',
      show: true,
      placeholder: 'Select number of years...',
      info: 'Vacation Frequency',
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
      info: 'Vacation Length',
      type: 'select-dropdown',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[LEISURE_PAGE].LENGTH_OF_VACATIONS_DROPDOWN],
      values: LENGTH_OF_VACATIONS_DATA
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
