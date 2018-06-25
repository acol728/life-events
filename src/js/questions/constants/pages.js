export const INITIAL_PAGE = 'initialPage';
export const CAREER_PLANS_PAGE = 'careerPlansPage';
export const LIFESTYLE_PAGE = 'lifestylePage';
export const LEISURE_PAGE = 'leisurePage';
export const RETIREMENT_PLANS_PAGE = 'retirementPlansPage';
export const WELCOME_PAGE = 'welcomePage';

export const PAGE_IDS = {
  WELCOME_PAGE,
  INITIAL_PAGE,
  CAREER_PLANS_PAGE,
  LIFESTYLE_PAGE,
  LEISURE_PAGE,
  RETIREMENT_PLANS_PAGE
};

export const QUESTION_IDS = {
  [WELCOME_PAGE]: {},
  [INITIAL_PAGE]: {
    CURRENT_AGE_TEXT: 'currentAgeInput',
    RETIREMENT_AGE_TEXT: 'retirementAgeInput',
    NETWORTH_TEXT: 'networthInput',
    CURRENT_ANNUAL_INCOME_TEXT: 'currentAnnualIncomeInput'
  },
  [CAREER_PLANS_PAGE]: {
    COLLEGE_RADIO: 'collegeInput',
    YEARS_ENROLLED_TEXT: 'yearsEnrolledInput',
    TUITION_COST_TEXT: 'tuitionCostInput'
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
  [RETIREMENT_PLANS_PAGE]: {
    FOUR01K_TEXT: '401KInput'
  }
};

const IDs = {
  PAGE_IDS,
  QUESTION_IDS
};

export default IDs;
