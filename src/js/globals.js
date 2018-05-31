
import pages, { setInputEvents } from './questions/pages'

const state = {
	ui: {
		navigation: {
			currentPage: 0
		},
		pages,
		values: {}
	},
	data: {

	}
}

export { setInputEvents }
export default state
