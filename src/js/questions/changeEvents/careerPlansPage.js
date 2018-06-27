// import R from 'ramda';
import $ from 'jquery';
import CONSTANTS from '../constants';
import pages from '../pages';
import { addOrUpdateInfo, updateHeroes } from './util';

const { INCOME_OR_CAREER_DATA } = CONSTANTS;
const { CAREER_PLANS_PAGE } = CONSTANTS.IDs.PAGE_IDS;
const { QUESTION_IDS } = CONSTANTS.IDs;

export default {
  [QUESTION_IDS[CAREER_PLANS_PAGE].NETWORTH_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    const isValid = !Number.isNaN(parsedValue);
    if (isValid) {
      state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].NETWORTH_TEXT] = Number.isNaN(parsedValue) ? 0 : parsedValue;

      const infoItems = [
        {
          key: pages[3].questions[0].info,
          val: parsedValue
        }
      ];
      addOrUpdateInfo(infoItems);

      const financialData = state.calculateFunds();
      state.data = { ...state.data, financialData };
      updateHeroes(financialData);
    } else {
      state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].NETWORTH_TEXT] = undefined;
    }
  },

  [QUESTION_IDS[CAREER_PLANS_PAGE].INCOME_OR_CAREER]: (e) => {
    console.log('fired');
    const index = INCOME_OR_CAREER_DATA.findIndex(element => element.id === e.target.id);
    const answer = INCOME_OR_CAREER_DATA[index].value;
    state.ui.values[pages[3].questions[1].info] = answer;

    if (answer) {
      $('#annualIncomeText').css('display', 'block');
    } else {
      $('#annualIncomeText').css('display', 'none');
    }

    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },

  [QUESTION_IDS[CAREER_PLANS_PAGE].CURRENT_ANNUAL_INCOME_TEXT]: (e) => {
    const value = parseInt(e.target.value, 10);
    state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].CURRENT_ANNUAL_INCOME_TEXT] = Number.isNaN(value) ? 0 : value;
    /*
    const infoItems = [
      {
        key: pages[1].questions[2].info,
        val: value
      }
    ];
    addOrUpdateInfo(infoItems);
*/
    const financialData = state.calculateFunds();
    updateHeroes(financialData);
    state.data = { ...state.data, financialData };
  }
/*
  [QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN]: (careerId) => {
    state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN] = careerId;
    state.ui.values.info[pages[2].questions[0].info] = careerId;

    const index = CONSTANTS.OCCUPATIONAL_DATA.findIndex(element => element.id === careerId);

    const STARTING_SALARY_KEY = 'Starting Salary';
    const STARTING_SALARY_VAL = CONSTANTS.OCCUPATIONAL_DATA[index].salary;

    const infoItems = [
      {
        key: pages[2].questions[0].info,
        val: CONSTANTS.OCCUPATIONAL_DATA[index].text
      },
      {
        key: STARTING_SALARY_KEY,
        val: STARTING_SALARY_VAL
      }
    ];
    addOrUpdateInfo(infoItems);

    const financialData = state.calculateFunds();
    updateHeroes(financialData);

    const careerData = R.filter(career => career.id === careerId, OCCUPATIONAL_DATA)[0];

    const additionalSchoolingRequired = [
      EDUCATION_LEVELS.SOME_COL_NO_DEG,
      EDUCATION_LEVELS.ASSC_DEG,
      EDUCATION_LEVELS.BACH_DEG,
      EDUCATION_LEVELS.POST_SEC_NON_DEG,
      EDUCATION_LEVELS.MAST_DEG,
      EDUCATION_LEVELS.DOC_OR_PROF_DEG
    ];

    if (R.contains(careerData.education, additionalSchoolingRequired)) {
      $(`#${QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO}`).css('display', 'block');
    } else {
      $(`#${QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO}`).css('display', 'none');
    }

    state.data = { ...state.data, financialData };
  } */
};
