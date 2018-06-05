
export const INITIAL_PAGE = 'initialPage'
export const CAREER_PLANS_PAGE = 'careerPlansPage'
export const RETIREMENT_PLANS_PAGE = 'retirementPlansPage'
export const WELCOME_PAGE = 'welcomePage'

export const PAGE_IDS = {
	WELCOME_PAGE,
	INITIAL_PAGE,
	CAREER_PLANS_PAGE,
	RETIREMENT_PLANS_PAGE
}

export const QUESTION_IDS = {
	[WELCOME_PAGE]: {},
	[INITIAL_PAGE]: {
		AGE_TEXT: 'ageInput',
		NETWORTH_TEXT: 'networthInput'
	},
	[CAREER_PLANS_PAGE]: {
		CAREER_DROPDOWN: 'careerInput',
		EDUCATION_PUBLIC_PRIVATE_RADIO: 'eduPublicPrivateInput'
	},
	[RETIREMENT_PLANS_PAGE]: {
		FOUR01K_TEXT: '401KInput'
	}
}

const IDs = {
	PAGE_IDS,
	QUESTION_IDS
}

export default IDs
