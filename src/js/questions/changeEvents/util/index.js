import $ from 'jquery'
import { navigateForward, navigateBackward, navigateToAPage } from '../../../navigation'

export const showError = (id, msg) => {
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

export const removeError = (id) => {
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
