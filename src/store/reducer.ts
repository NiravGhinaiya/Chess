import * as actionTypes from "./actionTypes"
import { v4 as uuid } from 'uuid';

const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
    isLoginModalOpen: false,
    user: null,
}

const showLoginModalHandler = (state: ArticleState, action: any) => {
    const { isLoginModalOpen } = action;
    return { ...state, isLoginModalOpen }
}

const addUserDetailsHandler = (state: ArticleState, action: any) => {

    const id: string = uuid();
    const { values } = action;
    let user = {
        ...values,
        userId: id,
        token: "abc2",
        entryFee: 100,
        chips: 50000,
        userProfile: 'asd.jpg',
    }
    return { ...state, user, isLoginModalOpen: !state.isLoginModalOpen}
}

const reducer = (
    state: ArticleState = initialState,
    action: any
): ArticleState => {
    switch (action.type) {

        case actionTypes.ADD_ARTICLE:

            const newArticle: IArticle = {
                id: Math.random(), // not really unique
                title: action.article.title,
                body: action.article.body,
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            }

        case actionTypes.REMOVE_ARTICLE:

            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles,
            }

        case actionTypes.SHOW_LOGIN_MODAL: return showLoginModalHandler(state, action);
        case actionTypes.ADD_USER_DETAILS: return addUserDetailsHandler(state, action);

    }
    return state;
}

export default reducer