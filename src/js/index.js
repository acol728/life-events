import $ from 'jquery';
import '../styles/entry.scss';
import globals, { setInputEvents, selectInputClickEvent } from './globals';
import { navigateForward, navigateBackward, navigateToAPage } from './navigation';
import { updateHeroes } from './questions/changeEvents/util';
import calcs from './calcs';
import CONSTANTS from './questions/constants';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { LEISURE_PAGE } = PAGE_IDS;

$(document).ready(() => {
  // Stub to create chart. Not used initially. Feel free to create using D3!
  calcs.createChart();
  $('#navigate-forward').on('click', navigateForward);

  $('.nav-button').on('click', navigateToAPage);

  $('#buttonInitial').on('click', navigateForward);

  $('#buttonSubmit').on('click', navigateForward);

  $('#navigate-back').on('click', navigateBackward);

  // If dropdown li not disabled set to active and add text to input
  $('.select-dropdown > li:not(.disabled)').on('click', selectInputClickEvent);

  setInputEvents();
});

function drowdownClickHandler () {
  $(this).parents('.uitk-select').toggleClass('is-open');
}

$('#myRange').change((e) => {
  const output = document.getElementById('sliderOutput');
  output.innerHTML = `$${e.currentTarget.value}`;
  state.ui.values[QUESTION_IDS[LEISURE_PAGE].SUBSCRIPTION_SLIDER] = e.currentTarget.value;
  const financialData = state.calculateFunds();
  state.data = { ...state.data, financialData };
  updateHeroes(financialData);
});

// Open dropdown when input clicked
$('.select-input').click(drowdownClickHandler);

// Checkbox in multiple selects will be checked by clicking on the li
$('.select-dropdown > li input[type="checkbox"]').click((e) => {
  e.stopPropagation();
});

// Close dropdowns if clicked outside uitk-select
$(document).click((e) => {
  e.stopPropagation();
  if ($('.uitk-select').has(e.target).length === 0) {
    $('.uitk-select').removeClass('is-open');
  }
});

module.exports = {
  ...globals,
  createChart: calcs.createChart,
  calculateFunds: calcs.calculateFunds
};
