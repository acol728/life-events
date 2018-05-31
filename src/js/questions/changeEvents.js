/* global state:true */
/* eslint no-console: "off" */
import { INITIAL_PAGE, QUESTION_IDS } from './constants'

export default {
	[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]: (e) => {
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT] = e.target.value
	},
	[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]: (e) => {
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT] = e.target.value
	}

}
