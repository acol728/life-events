
/* eslint no-console: "off" */
import R from 'ramda'
import $ from 'jquery'
import CONSTANTS from './constants'
import pages from './pages'

const { OCCUPATIONAL_DATA, EDUCATION_LEVELS } = CONSTANTS
const { INITIAL_PAGE, CAREER_PLANS_PAGE } = CONSTANTS.IDs.PAGE_IDS
const { QUESTION_IDS } = CONSTANTS.IDs

const addOrUpdateInfo = (i) => {
	i.map((item) => {
		const idKey = item.key.replace(/\s/g, '')
		if ($(`#info-row-${idKey}`).length) {
			$(`#info-row-${idKey} .val`).html(item.val)
		} else {
			$('#info-table').append(`<li id="info-row-${idKey}"><span class="key">${item.key}</span><span class="val" style="word-wrap: break-word; display: block;">${item.val}</span></li>`)
		}
		return item
	})
}

export default {
	[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]: (e) => {
		const value = parseInt(e.target.value, 10)
		const val = Number.isNaN(value) ? 0 : value
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT] = val
		state.ui.values.info[pages[1].questions[0].info] = val
		const infoItems = [
			{
				key: pages[1].questions[0].info,
				val
			}
		]
		addOrUpdateInfo(infoItems)
	},
	[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]: (e) => {
		const value = parseInt(e.target.value, 10)
		const val = Number.isNaN(value) ? 0 : value
		state.ui.values[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT] = val
		state.ui.values.info[pages[1].questions[1].info] = val

		const financialData = state.calculateFunds()
		const infoItems = [
			{
				key: pages[1].questions[1].info,
				val
			}
		]
		addOrUpdateInfo(infoItems)

		state.data = { ...state.data, financialData }
	},
	[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN]: (careerId) => {
		state.ui.values[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN] = careerId
		state.ui.values.info[pages[2].questions[0].info] = careerId

		const index = CONSTANTS.OCCUPATIONAL_DATA.findIndex(element => element.id === careerId)

		const STARTING_SALARY_KEY = 'Starting Salary'
		const STARTING_SALARY_VAL = CONSTANTS.OCCUPATIONAL_DATA[index].salary

		const infoItems = [
			{
				key: pages[2].questions[0].info,
				val: CONSTANTS.OCCUPATIONAL_DATA[index].text
			},
			{
				key: STARTING_SALARY_KEY,
				val: STARTING_SALARY_VAL
			}
		]
		addOrUpdateInfo(infoItems)

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
		state.ui.values.info[pages[2].questions[1].info] = e.target.id
		const infoItems = [
			{
				key: pages[2].questions[1].info,
				val: e.target.id
			}
		]

		addOrUpdateInfo(infoItems)
	}

}
