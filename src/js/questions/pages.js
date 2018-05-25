const initialInfoPage = {
	id: 'initialPage',
	title: "Let's start with where you are at...",
	show: true,
	questions: [
		{
			id: 'ageInput',
			placeholder: 'Age',
			type: 'text'

		},
		{
			id: 'networkInput',
			placeholder: 'Networth',
			type: 'text'
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
			placeholder: 'Career',
			type: 'text'
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

export default pages
