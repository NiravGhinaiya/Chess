import * as actionTypes from "./actionTypes"

export const addArticle = (article: number) => ({
    type: actionTypes.ADD_ARTICLE,
    article,
})

export const removeArticle = (article: IArticle) => ({
    type: actionTypes.REMOVE_ARTICLE,
    article,
})

export const showLoginModal = (isLoginModalOpen: boolean) => ({
    type: actionTypes.SHOW_LOGIN_MODAL,
    isLoginModalOpen,
})

// export function simulateHttpRequest(action: ArticleAction) {
//     return (dispatch: DispatchType) => {
//         dispatch(action)
//     }
// }