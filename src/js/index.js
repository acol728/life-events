/* global state:true */
/* eslint no-console: "off" */
import $ from 'jquery'
import '../styles/entry.scss'
import globals, { setInputEvents, selectInputClickEvent } from './globals'
import { navigateForward, navigateBackward } from './navigation'
import chart from './chart'

$(document).ready(() => {
	// chart.createChart()
	console.log('NAVIGATE FORWARD: ', navigateForward)
	$('#navigate-forward').click(navigateForward)

	$('#navigate-back').click(navigateBackward)

	// If dropdown li not disabled set to active and add text to input
	$('.select-dropdown > li:not(.disabled)').on('click', selectInputClickEvent);

	setInputEvents()
})

// Open dropdown when input clicked
$('.select-input').click(function () {
	$(this).parents('.uitk-select').toggleClass('is-open');
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
	createChart: chart.createChart,
	calculateFunds: chart.calculateFunds
}
