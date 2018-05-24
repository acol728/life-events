import $ from 'jquery'

const navigateForward = () => {

    const nextPage = state.ui.navigation.currentPage >= state.ui.pages.length - 1 ? state.ui.pages.length - 1 : state.ui.navigation.currentPage + 1

    const newPages = state.ui.pages.map((page, i) => {
        let show = i === nextPage ? true : false
        $(`#${page.id}`).css("display", show ? 'block' : 'none');
        return { ...page, show }
    })

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

    const previousPage = state.ui.navigation.currentPage <= 0 ? 0 : state.ui.navigation.currentPage - 1

    const newPages = state.ui.pages.map((page, i) => {

        let show = i === previousPage ? true : false
        $(`#${page.id}`).css("display", show ? 'block' : 'none');
        return { ...page, show }
    })

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