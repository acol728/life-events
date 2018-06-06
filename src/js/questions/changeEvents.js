
/* eslint no-console: "off" */
import R from 'ramda'
import $ from 'jquery'
import CONSTANTS from './constants'
import { navigateForward, navigateBackward, navigateToAPage } from '../navigation'

const { OCCUPATIONAL_DATA, EDUCATION_LEVELS } = CONSTANTS
const { INITIAL_PAGE, CAREER_PLANS_PAGE } = CONSTANTS.IDs.PAGE_IDS
const { QUESTION_IDS } = CONSTANTS.IDs

export default {
	[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]: (e) => {
		const parsedValue = parseInt(e.target.value, 10)
		let isValid = !Number.isNaN(parsedValue)

		isValid = !!(isValid && (parsedValue >= 18 && parsedValue <= 65))
		console.log('​isValid', isValid);

		if (isValid) {
			state.ui.values[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT] = parsedValue
			removeError(QUESTION_IDS[INITIAL_PAGE].AGE_TEXT)
		} else {
			showError(QUESTION_IDS[INITIAL_PAGE].AGE_TEXT, 'Invalid Age')
		}
	},
	[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]: (e) => {
		const value = parseInt(e.target.value, 10)
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT] = Number.isNaN(value) ? 0 : value

		const financialData = state.calculateFunds()

		// console.log('FUNDS: ', financialData)

		state.data = { ...state.data, financialData }
	},
	[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN]: (careerId) => {
		state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN] = careerId
		const financialData = state.calculateFunds()

		const careerData = R.filter(career => career.id === careerId, OCCUPATIONAL_DATA)[0]

		const additionalSchoolingRequired = [
			EDUCATION_LEVELS.SOME_COL_NO_DEG,
			EDUCATION_LEVELS.ASSC_DEG,
			EDUCATION_LEVELS.BACH_DEG,
			EDUCATION_LEVELS.POST_SEC_NON_DEG,
			EDUCATION_LEVELS.MAST_DEG,
			EDUCATION_LEVELS.DOC_OR_PROF_DEG
		]

		if (R.contains(careerData.education, additionalSchoolingRequired)) {
			$(`#${QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO}`).css('display', 'block')
		} else {
			$(`#${QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO}`).css('display', 'none')
		}

		state.data = { ...state.data, financialData }
	},

	[QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO]: (e) => {
		state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO] = e.target.id
	}

}

const showError = (id, msg) => {
	const $currentElement = $(`#${id}`)
	$currentElement.addClass('has-error')
	$(`<span id="error-${id}" class="error">${msg}</span>`).insertAfter($currentElement)

	$('#navigate-forward').addClass('disabled')
	$('#navigate-forward').off('click', navigateForward)

	$('#navigate-back').addClass('disabled')
	$('#navigate-back').off('click', navigateBackward)

	$('.nav-button').addClass('disabled')
	$('.nav-button').off('click', navigateToAPage)

	state.ui.hasPageError = true
}

const removeError = (id) => {
	const $currentElement = $(`#${id}`)
	$currentElement.removeClass('has-error')
	$(`#error-${id}`).remove()

	$('#navigate-forward').removeClass('disabled')
	$('#navigate-forward').off('click', navigateForward).on('click', navigateForward)

	$('#navigate-back').removeClass('disabled')
	$('#navigate-back').off('click', navigateBackward).on('click', navigateBackward)

	$('.nav-button').removeClass('disabled')
	$('.nav-button').off('click', navigateToAPage).on('click', navigateToAPage)

	state.ui.hasPageError = false
}
