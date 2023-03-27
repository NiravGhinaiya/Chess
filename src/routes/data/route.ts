import { lazy } from 'react';
import { ROUTE_LIST } from '../../interfaces/interFace';

const Dashboard = lazy(() => import('../../components/Dashboard'));
const Error404 = lazy(() => import('../../views/Error404'));
const SingUp = lazy(() => import('../../views/SingUp'));
const Chessbord = lazy(() => import('../../components/Chessbord'));

export const PublicRouteList : ROUTE_LIST[] = [

    // Home
    { path: "/", element: Dashboard, restricted: false, title: "Dashbord" },
    
    // Error 404
    { path: "*", element: Error404, restricted: false, title: "404" },
    
    // { path: "/singup", element: SingUp, restricted: false, title: "SingUp" },
    
]

export const PrivateRouteList : ROUTE_LIST[] = [

    { path: "/chessbord", element: Chessbord, restricted: false, title: "Chessbord" },
    
]