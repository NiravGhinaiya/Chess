import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { PublicRoute } from "./PublicRoute";
import { PrivateRouteList, PublicRouteList } from "./data/route";
import { PUBLICE_ROUTE, ROUTE_LIST } from "../interfaces/interFace";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from "redux"
import { showLoginModal } from "../store/actionCreators";
import { Helmet } from "react-helmet";
import { PublicRoute } from "./PublicRoute";
import { ArticleState } from "../store/type";


function RoutesComponent(): JSX.Element {

  const dispatch: Dispatch<any> = useDispatch()
  const state: ArticleState = useSelector((state: ArticleState) => state)
  const navigate = useNavigate()
  const { isLoginModalOpen } = state

  const PrivateRoute = ({ children }: any) => {
    const token = state.user.userId;

    if (token === '') {
      dispatch(showLoginModal(!isLoginModalOpen))
      return navigate('/');
    }
    return children;
  }

  // const PublicRoute = ({ children }: any) => {
  //   const token = state.user;

  //   if (token !== ') {
  //     return navigate('/chessbord');
  //   }
  //   return children;
  // }

  return (
    <Routes>
      {/* PublicRoutes */}
      {
        PublicRouteList.map(({ element, path, restricted, title }: ROUTE_LIST) => {
          return (
            <Route
              key={title}
              path={path}
              element={
                <PublicRoute
                  element={element}
                  title={title}
                  restricted={restricted}
                />
              }
            />)
        })}
      {
        PrivateRouteList.map(({ element: RouteComponent, path, restricted, title }: ROUTE_LIST) => {
          return (
            <Route
              key={title}
              path={path}
              element={
                <PrivateRoute>
                  <RouteComponent />
                </PrivateRoute>
              }
            />
          )
        })}
    </Routes>

  );
}

export default RoutesComponent;
