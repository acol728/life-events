import IDs from './pages';
import OCCUPATIONAL_DATA from './occupationData';
import SUBSCRIPTION_DATA from './subscriptionData';
import EDUCATIONAL_DATA, { EDU_PUBLIC_PRIVATE_DATA, EDUCATION_LEVELS } from './educationData';
import { HOUSING_OPTIONS_DATA } from './lifestyleData';
import TAX_INFO from './taxInfo';
import { HEROES_DATA } from './heroesData';
import { NUMBER_OF_VACATIONS_DATA } from './numberOfVacationsData';
import { LENGTH_OF_VACATIONS_DATA } from './lengthOfVacationsData';

const DEFAULT_AGE = 18;
const DEFAULT_COLLEGE_START_AGE = 18;
const DEFAULT_RETIREMENT_AGE = 65;
const DEFAULT_DEATH_AGE = 80;
const DEFAULT_COLA_ADJ = 0.02;
// const AVERAGE_VACATION_COST = 200;
// const

export default {
  IDs,
  OCCUPATIONAL_DATA,
  EDUCATIONAL_DATA,
  EDUCATION_LEVELS,
  EDU_PUBLIC_PRIVATE_DATA,
  HOUSING_OPTIONS_DATA,
  DEFAULT_AGE,
  DEFAULT_COLLEGE_START_AGE,
  DEFAULT_RETIREMENT_AGE,
  DEFAULT_DEATH_AGE,
  DEFAULT_COLA_ADJ,
  TAX_INFO,
  HEROES_DATA,
  SUBSCRIPTION_DATA,
  NUMBER_OF_VACATIONS_DATA,
  LENGTH_OF_VACATIONS_DATA
};
