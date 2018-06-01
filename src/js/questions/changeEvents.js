
/* eslint no-console: "off" */
import CONSTANTS from './constants'

const { INITIAL_PAGE, CAREER_PLANS_PAGE } = CONSTANTS.IDs.PAGE_IDS
const { QUESTION_IDS } = CONSTANTS.IDs

export default {
	[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]: (e) => {
		const value = parseInt(e.target.value, 10)
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT] = Number.isNaN(value) ? 0 : value
	},
	[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]: (e) => {
		const value = parseInt(e.target.value, 10)
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT] = Number.isNaN(value) ? 0 : value
		console.log('FUNDS: ', state.calculateFunds())
	},
	[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN]: (careerId) => {
		state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN] = careerId
		console.log('FUNDS: ', state.calculateFunds())
	}

}
