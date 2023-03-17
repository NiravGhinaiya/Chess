import React from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PublicRouteList } from "./data/PublicRouteList";
import { PUBLICE_ROUTE_LIST } from "../interfaces/interFace";

function RoutesComponent(): JSX.Element {

  return (
    <Routes>
      {/* PublicRoutes */}
      {
        PublicRouteList?.map(({ element, path, restricted, title }: PUBLICE_ROUTE_LIST) => {
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
            />
          )
        })}
    </Routes>

  );
}

export default RoutesComponent;
