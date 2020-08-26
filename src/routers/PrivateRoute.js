import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from './../components/Header';
import AuthContext  from "./../context/auth";


const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest)
  const { authContext } = useContext(AuthContext);
 
  return (
    <Route {...rest} render={props => (
        true ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      )}
    />
  );
}

export default PrivateRoute;
