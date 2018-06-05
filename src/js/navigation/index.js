/* global state:true */
import $ from 'jquery'

const updatePages = (pages, pageIndex) => (pages || []).map((page, i) => {
	const show = i === pageIndex
	$(`#${page.id}`).css('display', show ? 'block' : 'none');
	return { ...page, show }
})

const navigateForward = () => {
	const { currentPage } = state.ui.navigation
	const { pages } = state.ui
	const nextPage = currentPage >= pages.length - 1 ? pages.length - 1 : currentPage + 1
	console.log('NEXT PAGE: ', nextPage)
	// const newPages = state.ui.pages.map((page, i) => {
	//     let show = i === nextPage ? true : false
	//     $(`#${page.id}`).css("display", show ? 'block' : 'none');
	//     return { ...page, show }
	// })
	const newPages = updatePages(state.ui.pages, nextPage)
	const newState = {
		...state,
		ui: {
			...state.ui,
			navigation: { ...state.ui.navigation, currentPage: nextPage },
			pages: newPages
		}
	}

	state = { ...newState }
}

const navigateBackward = () => {
	const { currentPage } = state.ui.navigation
	const previousPage = currentPage <= 0 ? 0 : currentPage - 1

	// const newPages = state.ui.pages.map((page, i) => {

	//     let show = i === previousPage ? true : false
	//     $(`#${page.id}`).css("display", show ? 'block' : 'none');
	//     return { ...page, show }
	// })

	const newPages = updatePages(state.ui.pages, previousPage)
	const newState = {
		...state,
		ui: {
			...state.ui,
			navigation: { ...state.ui.navigation, currentPage: previousPage },
			pages: newPages
		}
	}
	state = { ...newState }
}

export {
	navigateForward,
	navigateBackward
}
