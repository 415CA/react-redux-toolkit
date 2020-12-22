import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/Routes';
import { AuthContext } from '../Firebase/Context';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={ROUTES.SIGN_IN} />
      }
    />
  );
};

export default PrivateRoute;
