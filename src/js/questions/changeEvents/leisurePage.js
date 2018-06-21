import CONSTANTS from '../constants';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { LEISURE_PAGE } = PAGE_IDS;

export default {
  [QUESTION_IDS[LEISURE_PAGE].NUMBER_OF_VACATIONS_DROPDOWN]: (e) => {
    // const numOfVacations = e.target.value;
    //console.log(e);
  },
  [QUESTION_IDS[LEISURE_PAGE].LENGTH_OF_VACATIONS_DROPDOWN]: (e) => {
    // const lengthOfVacations = e.target.value;
    //console.log(e);
  },
  [QUESTION_IDS[LEISURE_PAGE].SUBSCRIPTION_DROPDOWN]: (e) => {

  },
  [QUESTION_IDS[LEISURE_PAGE].COFFEE_RADIO]: (e) => {

  }
};
