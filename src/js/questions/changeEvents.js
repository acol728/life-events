
/* eslint no-console: "off" */
import R from 'ramda'
import $ from 'jquery'
import CONSTANTS from './constants'

const { OCCUPATIONAL_DATA, EDUCATION_LEVELS } = CONSTANTS
const { INITIAL_PAGE, CAREER_PLANS_PAGE } = CONSTANTS.IDs.PAGE_IDS
const { QUESTION_IDS } = CONSTANTS.IDs

const addOrUpdateInfo = (i) => {
	i.map((item) => {
		if ($(`#info-row-${item.key}`).length) {
			$(`#info-row-${item.key} .val`).html(item.value)
		} else {
			$('#info-table').append(`<li id="info-row-${item.key}"><span class="key">${item.key}</span><span class="val" style="word-wrap: break-word; display: block;">${item.value}</span></li>`)
		}
		return item
	})
}

export default {
	[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]: (e) => {
		const value = parseInt(e.target.value, 10)
		const val = Number.isNaN(value) ? 0 : value
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT] = val
		state.ui.values.info.Age = val
		const i = [
			{
				key: QUESTION_IDS[INITIAL_PAGE].AGE_TEXT,
				val
			}
		]

		addOrUpdateInfo(i)
	},
	[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]: (e) => {
		const value = parseInt(e.target.value, 10)
		const val = Number.isNaN(value) ? 0 : value
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT] = val
		state.ui.values.info['Initial Net Worth'] = val

		const financialData = state.calculateFunds()
		addOrUpdateInfo(QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT, val)

		state.data = { ...state.data, financialData }
	},
	[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN]: (careerId) => {
		state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN] = careerId
		const financialData = state.calculateFunds()
		addOrUpdateInfo(QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN, careerId)

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
