import CONSTANTS from '../constants';
import pages from '../pages';
// import { updateHeroes, addOrUpdateInfo } from './util';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { LEISURE_PAGE } = PAGE_IDS;
const {
  NUMBER_OF_VACATIONS_DATA, LENGTH_OF_VACATIONS_DATA, SUBSCRIPTION_DATA, COFFEE_DATA
} = CONSTANTS;

export default {
  [QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_VACATIONS_DROPDOWN]: (numberId) => {
    const index = NUMBER_OF_VACATIONS_DATA.findIndex(element => element.id === numberId);
    const numOfVacations = NUMBER_OF_VACATIONS_DATA[index].value;

    state.ui.values[pages[4].questions[0].info] = numOfVacations;
  },
  [QUESTION_IDS[LEISURE_PAGE].LENGTH_OF_VACATIONS_DROPDOWN]: (lengthId) => {
    const index = LENGTH_OF_VACATIONS_DATA.findIndex(element => element.id === lengthId);
    const lengthOfVacations = LENGTH_OF_VACATIONS_DATA[index].value;

    state.ui.values[pages[4].questions[1].info] = lengthOfVacations;
  },
  [QUESTION_IDS[LEISURE_PAGE].SUBSCRIPTION_DROPDOWN]: (subId) => {
    const index = SUBSCRIPTION_DATA.findIndex(element => element.id === subId);
    const subscriptionAmount = SUBSCRIPTION_DATA[index].value;

    state.ui.values[pages[4].questions[2].info] = subscriptionAmount;
  },
  [QUESTION_IDS[LEISURE_PAGE].COFFEE_RADIO]: (coffeeId) => {
    const index = COFFEE_DATA.findIndex(element => element.id === coffeeId.target.id);
    const dailyCoffee = COFFEE_DATA[index].value;

    state.ui.values[pages[4].questions[3].info] = dailyCoffee;
  // [QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_CARS_TEXT]: (e) => {
    // const infoItems = [
    // {
    // key: pages[3].questions[2].info,
    // val: parsedValue
    // }
    // ];
    // addOrUpdateInfo(infoItems);
  }
};
