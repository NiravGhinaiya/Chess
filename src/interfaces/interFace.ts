
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
    email:string,
    password:string,
}
// export interface SINGUP_DATA {
//     email:string,
//     password:string,
// }