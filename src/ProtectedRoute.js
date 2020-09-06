/**
 * HOC React component that renders protected routes
 * Else redirects to Login page
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = ({ component: Component, ...otherprops }) => {
  //console.log(auth);

  return (
    <Route {...otherprops} render={(props) => {
        //if authenticated allow access
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        }

        //else redirect to login
        return <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;
