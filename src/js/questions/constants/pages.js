export const INITIAL_PAGE = 'initialPage';
export const EDUCATION_PAGE = 'educationPage';
export const CAREER_PLANS_PAGE = 'careerPlansPage';
export const LIFESTYLE_PAGE = 'lifestylePage';
export const LEISURE_PAGE = 'leisurePage';
export const WELCOME_PAGE = 'welcomePage';
export const SUBMIT_PAGE = 'submitPage';

export const PAGE_IDS = {
  WELCOME_PAGE,
  INITIAL_PAGE,
  EDUCATION_PAGE,
  CAREER_PLANS_PAGE,
  LIFESTYLE_PAGE,
  LEISURE_PAGE,
  SUBMIT_PAGE
};

export const QUESTION_IDS = {
  [WELCOME_PAGE]: {},
  [INITIAL_PAGE]: {
    CURRENT_AGE_TEXT: 'currentAgeInput',
    RETIREMENT_AGE_TEXT: 'retirementAgeInput',
    NETWORTH_TEXT: 'networthInput',
    CURRENT_ANNUAL_INCOME_TEXT: 'currentAnnualIncomeInput'
  },
  [EDUCATION_PAGE]: {
    YEARS_ENROLLED_TEXT: 'yearsEnrolledInput',
    TUITION_COST_TEXT: 'tuitionCostInput'
  },
  [CAREER_PLANS_PAGE]: {
    INCOME_OR_CAREER_RADIO: 'incomeOrCareerInput'
  },
  [LIFESTYLE_PAGE]: {
    HOUSING_COSTS_TEXT: 'housingCostsInput',
    NUMBER_OF_CARS_TEXT: 'numberOfCarsInput',
    NUMBER_OF_DEPENDENTS_TEXT: 'numberOfDependentsInput',
    NUMBER_OF_PETS_TEXT: 'numberOfPetsInput'
  },
  [LEISURE_PAGE]: {
    NUMBER_OF_VACATIONS_DROPDOWN: 'numberOfVacationsInput',
    LENGTH_OF_VACATIONS_DROPDOWN: 'lengthOfVacationsInput',
    SUBSCRIPTION_DROPDOWN: 'subscriptionInput',
    COFFEE_RADIO: 'coffeeInput'
  },
  [SUBMIT_PAGE]: {}
};

const IDs = {
  PAGE_IDS,
  QUESTION_IDS
};

export default IDs;
