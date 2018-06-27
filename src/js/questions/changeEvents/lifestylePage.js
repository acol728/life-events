import CONSTANTS from '../constants';
import { showError, removeError, addOrUpdateInfo, updateHeroes } from './util';
import pages from '../pages';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { LIFESTYLE_PAGE } = PAGE_IDS;

export default {
  [QUESTION_IDS[LIFESTYLE_PAGE].HOUSING_COSTS_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && (parsedValue >= 0 && parsedValue <= 100000));

    if (isValid) {
      state.ui.values[QUESTION_IDS[LIFESTYLE_PAGE].HOUSING_COSTS_TEXT] = parsedValue;
      state.ui.values.info[pages[4].questions[0].info] = parsedValue;
      const infoItems = [
        {
          key: pages[4].questions[0].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[LIFESTYLE_PAGE].HOUSING_COSTS_TEXT);
    } else {
      showError(QUESTION_IDS[LIFESTYLE_PAGE].HOUSING_COSTS_TEXT, 'Please enter a number from 0 to 100,000.');
    }
    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },
  [QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && (parsedValue >= 0 && parsedValue <= 100000));

    if (isValid) {
      state.ui.values[QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT] = parsedValue;
      state.ui.values.info[pages[4].questions[1].info] = parsedValue;
      const infoItems = [
        {
          key: pages[4].questions[1].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT);
    } else {
      showError(QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT, 'Please enter a number from 0 to 100,000.');
    }
    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },
  [QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && (parsedValue >= 0 && parsedValue <= 10));

    if (isValid) {
      state.ui.values[QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT] = parsedValue;
      state.ui.values.info[pages[4].questions[2].info] = parsedValue;
      const infoItems = [
        {
          key: pages[4].questions[2].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT);
    } else {
      showError(QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT, 'Please enter a number from 0 to 10.');
    }
    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  }
};
