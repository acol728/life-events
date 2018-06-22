import CONSTANTS from '../constants';
import { showError, removeError, addOrUpdateInfo } from './util';
import pages from '../pages';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { LIFESTYLE_PAGE } = PAGE_IDS;

export default {
  [QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && (parsedValue >= 0 && parsedValue <= 100));

    if (isValid) {
      state.ui.values[QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT] = parsedValue;
      state.ui.values.info[pages[1].questions[0].info] = parsedValue;
      const infoItems = [
        {
          key: pages[3].questions[2].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT);
    } else {
      showError(QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_CARS_TEXT, 'Invalid Amount');
    }
  },
  [QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && (parsedValue >= 0 && parsedValue <= 100));

    if (isValid) {
      state.ui.values[QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT] = parsedValue;
      state.ui.values.info[pages[1].questions[0].info] = parsedValue;
      const infoItems = [
        {
          key: pages[3].questions[3].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);
      removeError(QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT);
    } else {
      showError(QUESTION_IDS[LIFESTYLE_PAGE].NUMBER_OF_DEPENDENTS_TEXT, 'Invalid Amount');
    }
  }
};
