import { lazy } from 'react';
import { PUBLICE_ROUTE_LIST } from '../../interfaces/interFace';

const Header = lazy(() => import('../../components/Header'));
const Error404 = lazy(() => import('../../views/Error404'));
const SingUp = lazy(() => import('../../views/SingUp'));

export const PublicRouteList : PUBLICE_ROUTE_LIST[] = [

    // Home
    { path: "/", element: SingUp, restricted: false, title: "SingUp" },

    // Error 404
    { path: "*", element: Header, restricted: false, title: "404" },

]