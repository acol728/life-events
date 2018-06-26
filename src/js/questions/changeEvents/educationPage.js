import CONSTANTS from '../constants';
import { showError, removeError, addOrUpdateInfo, updateHeroes } from './util';
import pages from '../pages';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { EDUCATION_PAGE } = PAGE_IDS;

export default {
  [QUESTION_IDS[EDUCATION_PAGE].YEARS_ENROLLED_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && ((parsedValue >= 0) && (parsedValue <= 10)));

    if (isValid) {
      state.ui.values[QUESTION_IDS[EDUCATION_PAGE].YEARS_ENROLLED_TEXT] = parsedValue;
      state.ui.values.info[pages[2].questions[0].info] = parsedValue;
      const infoItems = [
        {
          key: pages[2].questions[0].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[EDUCATION_PAGE].YEARS_ENROLLED_TEXT);
    } else {
      showError(QUESTION_IDS[EDUCATION_PAGE].YEARS_ENROLLED_TEXT, 'Please enter a value from 0 to 10');
    }
    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },
  [QUESTION_IDS[EDUCATION_PAGE].TUITION_COST_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && ((parsedValue >= 0) && (parsedValue <= 100000)));

    if (isValid) {
      state.ui.values[QUESTION_IDS[EDUCATION_PAGE].TUITION_COST_TEXT] = parsedValue;
      state.ui.values.info[pages[2].questions[1].info] = parsedValue;
      const infoItems = [
        {
          key: pages[2].questions[1].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[EDUCATION_PAGE].TUITION_COST_TEXT);

      const financialData = state.calculateFunds();
      state.data = { ...state.data, financialData };
      updateHeroes(financialData);
    } else {
      showError(QUESTION_IDS[EDUCATION_PAGE].TUITION_COST_TEXT, 'Please enter a value from 0 to 100,000');
    }
  }
};
