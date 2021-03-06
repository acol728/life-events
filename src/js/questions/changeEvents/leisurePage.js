// import $ from 'jquery';
import CONSTANTS from '../constants';
import pages from '../pages';
import { updateHeroes } from './util';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { LEISURE_PAGE } = PAGE_IDS;
const {
  NUMBER_OF_VACATIONS_DATA, LENGTH_OF_VACATIONS_DATA, SUBSCRIPTION_DATA, COFFEE_DATA
} = CONSTANTS;

export default {
  [QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_VACATIONS_DROPDOWN]: (numberId) => {
    const index = NUMBER_OF_VACATIONS_DATA.findIndex(element => element.id === numberId);
    const numOfVacations = NUMBER_OF_VACATIONS_DATA[index].value;

    state.ui.values[pages[5].questions[0].info] = numOfVacations;

    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },
  [QUESTION_IDS[LEISURE_PAGE].LENGTH_OF_VACATIONS_DROPDOWN]: (lengthId) => {
    const index = LENGTH_OF_VACATIONS_DATA.findIndex(element => element.id === lengthId);
    const lengthOfVacations = LENGTH_OF_VACATIONS_DATA[index].value;

    state.ui.values[pages[5].questions[1].info] = lengthOfVacations;

    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },
  [QUESTION_IDS[LEISURE_PAGE].SUBSCRIPTION_SLIDER]: (subId) => {
    const index = SUBSCRIPTION_DATA.findIndex(element => element.id === subId);
    const subscriptionAmount = SUBSCRIPTION_DATA[index].value;

    state.ui.values[pages[5].questions[2].info] = subscriptionAmount;

    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },
  [QUESTION_IDS[LEISURE_PAGE].COFFEE_RADIO]: (coffeeId) => {
    const index = COFFEE_DATA.findIndex(element => element.id === coffeeId.target.id);
    const dailyCoffee = COFFEE_DATA[index].value;

    state.ui.values[pages[5].questions[3].info] = dailyCoffee;

    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  }
};
