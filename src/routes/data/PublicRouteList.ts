import { lazy } from 'react';
import { PUBLICE_ROUTE_LIST } from '../../interfaces/interFace';

const Dashboard = lazy(() => import('../../components/Dashboard'));
const Header = lazy(() => import('../../components/Header'));
const Error404 = lazy(() => import('../../views/Error404'));
const SingUp = lazy(() => import('../../views/SingUp'));

export const PublicRouteList : PUBLICE_ROUTE_LIST[] = [

    // Home
    { path: "/", element: Dashboard, restricted: false, title: "Dashbord" },
    
    // Error 404
    { path: "*", element: Error404, restricted: false, title: "404" },
    
    { path: "/singup", element: SingUp, restricted: false, title: "SingUp" },
    
]