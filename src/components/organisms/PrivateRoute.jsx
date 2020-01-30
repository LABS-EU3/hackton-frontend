import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector(state => state.currentUser);
  return (
    <Route
      {...rest}
      render={({ location, ...props }) =>
        token ? <Component {...props} /> : <Redirect to={{ pathname: "/register", state: { from: location.pathname } }} />
      }
    />
  );
};

export default PrivateRoute;
