import CONSTANTS from '../constants';
import { showError, removeError, addOrUpdateInfo, updateHeroes } from './util';
import pages from '../pages';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { INITIAL_PAGE } = PAGE_IDS;
const { DEFAULT_AGE } = CONSTANTS;

export default {
  [QUESTION_IDS[INITIAL_PAGE].CURRENT_AGE_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && ((parsedValue >= 18) && (parsedValue <= 130)));

    if (isValid) {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].CURRENT_AGE_TEXT] = parsedValue;
      state.ui.values.info[pages[1].questions[0].info] = parsedValue;
      const infoItems = [
        {
          key: pages[1].questions[0].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[INITIAL_PAGE].CURRENT_AGE_TEXT);
    } else {
      showError(QUESTION_IDS[INITIAL_PAGE].CURRENT_AGE_TEXT, 'Please enter an age from 18 to 130');
    }

    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },
  [QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    const currentAge = state.ui.values.currentAgeInput || DEFAULT_AGE;

    isValid = !!(isValid && ((parsedValue >= currentAge) && (parsedValue <= 130)));

    if (isValid) {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT] = parsedValue;
      state.ui.values.info[pages[1].questions[1].info] = parsedValue;
      const infoItems = [
        {
          key: pages[1].questions[1].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT);

      const financialData = state.calculateFunds();
      state.data = { ...state.data, financialData };
      updateHeroes(financialData);
    } else {
      showError(QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT, 'Please enter an age greater than your current age and under 130');
    }
  }
};
