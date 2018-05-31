/* eslint no-console: "off" */
import $ from 'jquery'
import '../styles/entry.scss'
import globals, { setInputEvents } from './globals'
import { navigateForward, navigateBackward } from './navigation'
import createChart from './chart'

$(document).ready(() => {
	createChart()
	$('#navigate-forward').click(navigateForward)

	$('#navigate-back').click(navigateBackward)
	console.log('setInputEvents: ', globals)
	setInputEvents()
})

// Open dropdown when input clicked
$('.select-input').click(function () {
	$(this).parents('.uitk-select').toggleClass('is-open');
});

// If dropdown li not disabled set to active and add text to input
$('.select-dropdown > li:not(.disabled)').click(function () {
	const $selectParent = $(this).parents('.uitk-select');
	let $liCheckbox;
	let checkedValues = '';
	$(this).toggleClass('active');

	if ($selectParent.hasClass('multiple')) {
		$liCheckbox = $(this).find('input[type="checkbox"]');
		$liCheckbox.prop('checked', !$liCheckbox.prop('checked'));
		checkedValues = $selectParent.find('input:checkbox:checked').map(function () {
			return $(this).siblings('span').text();
		}).get().join(', ');
		$selectParent.find('.select-input').val(checkedValues);
	} else {
		checkedValues = $(this).text();
		$selectParent.find('.select-input').val(checkedValues);
		$(this).siblings().removeClass('active');
		$selectParent.removeClass('is-open');
	}
});

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
	createChart
}
