/* global state:true */
import $ from 'jquery'

export const setInputEvents = () => {
	state.ui.pages.map((page) => {
		page.questions.map((question) => {
			if (question.changeEvent) {
				$(`#${question.id}`).change(question.changeEvent)
			}
			return question
		})
		return page
	})
}

const helpers = {
	setInputEvents
}

export default helpers
