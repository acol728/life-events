import CONSTANTS from '../constants'
import { showError, removeError } from './util'

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs
const { INITIAL_PAGE } = PAGE_IDS

export default {
	[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]: (e) => {

		const parsedValue = parseInt(e.target.value, 10)
		let isValid = !Number.isNaN(parsedValue)

		isValid = !!(isValid && (parsedValue >= 18 && parsedValue <= 65))

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

		state.data = { ...state.data, financialData }
	},
	[QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT]: (e) => {
		const value = parseInt(e.target.value, 10)
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT] = Number.isNaN(value) ? 0 : value
	}

}
