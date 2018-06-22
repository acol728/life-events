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
    AGE_TEXT: 'ageInput',
    NETWORTH_TEXT: 'networthInput',
    CURRENT_ANNUAL_INCOME_TEXT: 'currentAnnualIncomeInput'
  },
  [CAREER_PLANS_PAGE]: {
    CAREER_DROPDOWN: 'careerInput',
    EDUCATION_PUBLIC_PRIVATE_RADIO: 'eduPublicPrivateInput'
  },
  [LIFESTYLE_PAGE]: {
    MORTGAGE_RENT_RADIO: 'mortgageRentInput',
    REGION_OF_LIVING_RADIO: 'regionInput',
    NUMBER_OF_CARS_TEXT: 'numberOfCarsInput',
    NUMBER_OF_DEPENDENCIES_TEXT: 'numberOfDependenciesInput'
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
