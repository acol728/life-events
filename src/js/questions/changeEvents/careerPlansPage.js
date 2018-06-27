// import R from 'ramda';
import $ from 'jquery';
import CONSTANTS from '../constants';
import pages from '../pages';
import { addOrUpdateInfo, updateHeroes } from './util';

const { INCOME_OR_CAREER_DATA, OCCUPATIONAL_DATA } = CONSTANTS;
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
    const index = INCOME_OR_CAREER_DATA.findIndex(element => element.id === e.target.id);
    const answer = INCOME_OR_CAREER_DATA[index].value;

    if (answer) {
      $('#annualIncomeText').css('display', 'block');
      $('#careerDropdown').css('display', 'none');
    } else {
      $('#annualIncomeText').css('display', 'none');
      $('#careerDropdown').css('display', 'block');
    }
  },

  [QUESTION_IDS[CAREER_PLANS_PAGE].CURRENT_ANNUAL_INCOME_TEXT]: (e) => {
    const value = parseInt(e.target.value, 10);
    state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].CURRENT_ANNUAL_INCOME_TEXT] = Number.isNaN(value) ? 0 : value;

    const infoItems = [
      {
        key: 'Yearly Income',
        val: value
      }
    ];
    addOrUpdateInfo(infoItems);

    const financialData = state.calculateFunds();
    updateHeroes(financialData);
    state.data = { ...state.data, financialData };
  },
  [QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN]: (careerId) => {
    const index = OCCUPATIONAL_DATA.findIndex(element => element.id === careerId);
    const careerSalary = OCCUPATIONAL_DATA[index].salary;

    const infoItems = [
      {
        key: 'Yearly Income',
        val: careerSalary
      }
    ];
    addOrUpdateInfo(infoItems);

    state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].CURRENT_ANNUAL_INCOME_TEXT] = careerSalary;
    state.ui.values.info[pages[3].questions[3].info] = careerId;

    const financialData = state.calculateFunds();
    updateHeroes(financialData);
    state.data = { ...state.data, financialData };
  }
};
