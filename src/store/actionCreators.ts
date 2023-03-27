import { SINGUP_DATA } from "../interfaces/interFace"
import * as actionTypes from "./actionTypes"
import { IArticle } from "./type"

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

export const addUserDetails = (values: SINGUP_DATA) => ({
    type: actionTypes.ADD_USER_DETAILS,
    values,
})

export const socketSignUp = (data: any) => ({
    type: actionTypes.SOCKET_SINGUP,
    data,
})

export const socketSelectTable = (payload: any) => ({
    type: actionTypes.SOCKET_SELECT_TABLE,
    payload,
})

// export function simulateHttpRequest(action: ArticleAction) {
//     return (dispatch: DispatchType) => {
//         dispatch(action)
//     }
// }