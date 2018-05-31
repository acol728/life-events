/* eslint no-console: "off" */
import { INITIAL_PAGE, QUESTION_IDS } from './constants'
import { setInputEvents } from './helpers'
import changeEvents from './changeEvents'

const initialInfoPage = {

	id: INITIAL_PAGE,
	title: "Let's start with where you are at...",
	show: true,

	questions: [
		{
			id: QUESTION_IDS[INITIAL_PAGE].AGE_TEXT,
			placeholder: 'Age',
			type: 'text',
			changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]

		},
		{
			id: 'networkInput',
			placeholder: 'Networth',
			type: 'text',
			changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]
		}
	]
}

const careerPlansPage = {
	id: 'careerPlansPage',
	title: 'What are your aspirations...',
	show: false,
	questions: [
		{
			id: 'careerInput',
			label: 'Career',
			placeholder: 'Choose a Career...',
			type: 'select-dropdown',
			values: [
				{ text: 'Toastmaker' }, { text: 'ApplePicker' }, { text: 'Cow Tipper' }]
		}
	]
}

const retirementPlansPage = {
	id: 'retirementPlansPage',
	title: 'What are your retirement plans...',
	show: false,
	questions: [
		{
			id: '401KInput',
			placeholder: '401K / Month',
			type: 'text'
		}
	]
}

const pages = [
	initialInfoPage,
	careerPlansPage,
	retirementPlansPage
]

export { setInputEvents }

export default pages
