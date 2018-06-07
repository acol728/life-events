
import R from 'ramda'
import $ from 'jquery'

import CONSTANTS from '../constants'

const { OCCUPATIONAL_DATA, EDUCATION_LEVELS } = CONSTANTS
const { CAREER_PLANS_PAGE } = CONSTANTS.IDs.PAGE_IDS
const { QUESTION_IDS } = CONSTANTS.IDs

export default {
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
