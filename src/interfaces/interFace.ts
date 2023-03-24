
// ! for refence only 👇
export interface I_RESPONSE_EMITTER {
    tableId: string,
    data: object,
    message: string,
    error?: boolean
}

export interface PUBLICE_ROUTE_LIST {
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
}

export interface BOARD {
    x: number;
    y: number;
    flag: boolean;
    num: number;
}