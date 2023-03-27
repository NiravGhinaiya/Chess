import * as actionTypes from "./actionTypes"
import { v4 as uuid } from 'uuid';
import { ArticleState } from "./type";

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
    user: {
        "userId": "",
        "userName": "",
        "userEmail": "",
        "userProfile": "",
        "mobileNumber": 0,
        "socketId": "",
        "token": "",
        "chips": 0,
        "entryFee": 0,
        "gameWon": 0,
        "gameLoss": 0,
        "totalGamePlay": 0,
        "WinStreak": 0,
        "version": "",
        "isRobot": "FALSE",
        "isReMatch": false,
        "tableId": "",
        "createdAt": 0,
        "modifiedAt": 0
    },
    playerList: [{
        "userId": '',
        "userName": '',
        "seatIndex": 0,
        "color": '',
    }],
    board:[{
        "piecetype": 0,
        "teamcolor": 0,
        "PieceID": 0,
        "x": 0,
        "y": 0
    }],
    // position:{

    // }
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

    sessionStorage.setItem('sessionStorage', JSON.stringify(user))
    return { ...state, user: { ...state.user, ...user }, isLoginModalOpen: !state.isLoginModalOpen }
}

const socketSignUpHandler = (state: ArticleState, action: any) => {
    let { data } = action;
    data = JSON.parse(data);
    return { ...state, user: { ...state.user, ...data.data } }
}

const socketSelectTableHandler = (state: ArticleState, action: any) => {
    let { payload } = action;

    const { playerList, board, position } = payload.data;

    return { ...state, playerList, board }
}

// * Reducer ******************* Reducer ******************* Reducer ******************* Reducer

const sessionStorageState = JSON.parse(sessionStorage?.getItem('sessionStorage') || '{}')

const reducer = (
    state: ArticleState = sessionStorage.getItem('sessionStorage') ? { ...initialState, user: sessionStorageState } : initialState,
    action: any
): ArticleState => {
    switch (action.type) {

        case actionTypes.SHOW_LOGIN_MODAL: return showLoginModalHandler(state, action);
        case actionTypes.ADD_USER_DETAILS: return addUserDetailsHandler(state, action);
        case actionTypes.SOCKET_SINGUP: return socketSignUpHandler(state, action);
        case actionTypes.SOCKET_SELECT_TABLE: return socketSelectTableHandler(state, action);

    }
    return state;
}

export default reducer