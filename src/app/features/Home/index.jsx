import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import "./style.scss";

import HomeList from "./pages/HomeList";
import HomeDetail from "./pages/HomeDetails";
function HomeFeature(props) {
  const path = useRouteMatch().path;
  return (
    <>
      <Switch>
        <Route path={path} component={HomeList} exact />
        <Route path={`/:key`} component={HomeDetail} exact />
      </Switch>
    </>
  );
}

export default HomeFeature;
