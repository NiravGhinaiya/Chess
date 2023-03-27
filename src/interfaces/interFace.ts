// ! for refence only 👇
export interface I_RESPONSE_EMITTER {
    tableId: string,
    data: object,
    message: string,
    error?: boolean
}

export interface ROUTE_LIST {
    element: React.LazyExoticComponent<() => JSX.Element>,
    path: string,
    restricted: boolean,
    title: string,
    component?: any,
}

export interface PUBLICE_ROUTE {
    element: React.LazyExoticComponent<() => JSX.Element>,
    title: string,
    restricted: boolean
}

export interface LOGIN_DATA {
    userEmail: string,
    userPassword: string,
}

export interface SINGUP_DATA {
    userName: string,
    mobileNumber: string,
    userEmail: string,
    userPassword: string,
}

export interface I_SIGNUP_REQUEST_DATA {
    userId: string,   // Unique
    userName: string,
    userEmail: string,
    userProfile: string,
    mobileNumber: number,
    socketId: string,
    token: string,
    entryFee: number,
    chips: number,
    gameWon: number,
    gameLoss: number,
    totalGamePlay: number,
    WinStreak: number,
    version: string,
    isRobot: string,
    isReMatch: false,
    tableId: string,
    createdAt: number,
    modifiedAt: number
}

export interface PLAYER_LIST_DATA {
    "userId": string,
    "userName": string,
    "seatIndex": number,
    "color": string,
}

export interface BOARD_RES {
    "piecetype": number,
    "teamcolor": number,
    "PieceID": number,
    "x": number,
    "y": number,
}
export interface BOARD {
    x: number;
    y: number;
    flag: boolean;
}