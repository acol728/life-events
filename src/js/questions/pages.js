/* eslint no-console: "off" */
import CONSTANTS from './constants'
import { setInputEvents, selectInputClickEvent } from './helpers'
import changeEvents from './changeEvents'

const {
	WELCOME_PAGE, INITIAL_PAGE, CAREER_PLANS_PAGE, LIFESTYLE_PLANS_PAGE, RETIREMENT_PLANS_PAGE
} = CONSTANTS.IDs.PAGE_IDS
const { QUESTION_IDS } = CONSTANTS.IDs
const { OCCUPATIONAL_DATA, EDU_PUBLIC_PRIVATE_DATA, HOUSING_OPTIONS_DATA } = CONSTANTS

const welcomePage = {
	id: WELCOME_PAGE,
	nav: 'Welcome',
	title: 'Welcome',
	show: true
}

const initialInfoPage = {

	id: INITIAL_PAGE,
	nav: 'Get Started',
	title: "Let's start with where you are at...",
	show: false,
	questions: [
		{
			id: QUESTION_IDS[INITIAL_PAGE].AGE_TEXT,
			placeholder: 'Age',
			type: 'text',
			required: true,
			changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]

		},
		{
			id: QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT,
			placeholder: 'Networth',
			type: 'text',
			required: true,
			changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]
		},
		{
			id: QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT,
			placeholder: 'Annual Income',
			type: 'text',
			required: true,
			changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT]
		}
	]
}

const careerPlansPage = {
	id: CAREER_PLANS_PAGE,
	nav: 'Career',
	title: 'What are your aspirations...',
	show: false,
	questions: [
		{
			id: QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN,
			label: 'Career',
			show: true,
			placeholder: 'Choose a Career...',
			type: 'select-dropdown',
			required: true,
			changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN],
			values: OCCUPATIONAL_DATA
		},
		{
			id: QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO,
			label: 'Education',
			show: false,
			placeholder: 'Choose a type of school...',
			type: 'radio',
			required: false,
			changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO],
			values: EDU_PUBLIC_PRIVATE_DATA
		}
	]
}

const lifestylePage = {
	id: 'lifestylePage',
	nav: 'Lifestyle',
	title: 'How do you want to live...',
	show: false,
	required: true,
	questions: [
		{
			id: QUESTION_IDS[LIFESTYLE_PLANS_PAGE].MORTGAGE_RENT_RADIO,
			label: 'Mortgage / Rent',
			show: true,
			placeholder: 'Choose a type housing...',
			type: 'radio',
			changeEvent: changeEvents[QUESTION_IDS[LIFESTYLE_PLANS_PAGE].MORTGAGE_RENT_RADIO],
			values: HOUSING_OPTIONS_DATA
		}
	]
}

const retirementPlansPage = {
	id: RETIREMENT_PLANS_PAGE,
	nav: 'Retirement',
	title: 'What are your retirement plans...',
	show: false,
	required: true,
	questions: [
		{
			id: '401KInput',
			placeholder: '401K / Month',
			type: 'text'
		}
	]
}

const pages = [
	welcomePage,
	initialInfoPage,
	careerPlansPage,
	lifestylePage,
	retirementPlansPage
]

export { setInputEvents, selectInputClickEvent }

export default pages
