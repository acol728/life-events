
import pages, { setInputEvents, selectInputClickEvent } from './questions/pages'

const state = {
	ui: {
		navigation: {
			currentPage: 0
		},
		pages,
		values: {}
	},
	data: {

	},
	scott: 'testing'

}

export { setInputEvents, selectInputClickEvent }
export default state
