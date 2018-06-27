import $ from 'jquery';
import { navigateForward, navigateBackward, navigateToAPage } from '../../../navigation';

export const updateHeroes = (financialData) => {
  const dataAt65 = financialData.find(item => item.age === 65);
  const netWorthAt65 = dataAt65.totalNetworth - dataAt65.expenses - dataAt65.educationCost - dataAt65.lifestyleCost;
  $('#hero_2 h1').html(`$${Math.round(netWorthAt65).toLocaleString()}`);
  const monthlyIncome = dataAt65.monthly[11].currentMonthlySalary;
  $('#hero_1 h1').html(`$${Math.round(monthlyIncome).toLocaleString()}`);
  const monthlyRetirementAllowance = (netWorthAt65 / 15) / 12;
  $('#hero_3 h1').html(`$${Math.round(monthlyRetirementAllowance).toLocaleString()}`);
};

export const showError = (id, msg) => {
  const $currentElement = $(`#${id}`);
  $currentElement.addClass('has-error');
  $(`<span id="error-${id}" class="error">${msg}</span>`).insertAfter($currentElement);

  $('#navigate-initial').addClass('disabled');
  $('#navigate-initial').off('click', navigateForward);

  $('#navigate-forward').addClass('disabled');
  $('#navigate-forward').off('click', navigateForward);

  $('#navigate-back').addClass('disabled');
  $('#navigate-back').off('click', navigateBackward);

  $('.nav-button').addClass('disabled');
  $('.nav-button').off('click', navigateToAPage);

  state.ui.hasPageError = true;
};

export const removeError = (id) => {
  const $currentElement = $(`#${id}`);
  $currentElement.removeClass('has-error');
  $(`#error-${id}`).remove();

  $('#navigate-initial').removeClass('disabled');
  $('#navigate-initial').off('click', navigateForward).on('click', navigateForward);

  $('#navigate-forward').removeClass('disabled');
  $('#navigate-forward').off('click', navigateForward).on('click', navigateForward);

  $('#navigate-back').removeClass('disabled');
  $('#navigate-back').off('click', navigateBackward).on('click', navigateBackward);

  $('.nav-button').removeClass('disabled');
  $('.nav-button').off('click', navigateToAPage).on('click', navigateToAPage);

  state.ui.hasPageError = false;
};

export const addOrUpdateInfo = (i) => {
  i.map((item) => {
    const idKey = item.key.replace(/\s/g, '');
    if ($(`#info-row-${idKey}`).length) {
      $(`#info-row-${idKey} .val`).html(item.val);
    } else {
      $('#info-table').append(`<li id="info-row-${idKey}"><span class="key">${item.key}</span><span class="val" style="word-wrap: break-word; color: white; display: block;">${item.val}</span></li>`);
    }
    return item;
  });
};
