import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import Account from '../../pages/Account';
import Admin from '../../pages/Admin';
import Home from '../../pages/Home';
import Landing from '../../pages/Landing';
import PasswordForget from '../../pages/PasswordForget';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import { AuthProvider } from '../Authentication/Firebase/Context';
import PrivateRoute from '../Authentication/Private';
import Navigation from '../Navigation';

const NoMatch = () => (
  <>
    <div>- 404 -</div>
  </>
);

const App = () => (
  <AuthProvider>
    <Router>
      <div>
        <Navigation />

        <hr />
        <Switch>
          <PrivateRoute exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <PrivateRoute exact path={ROUTES.ACCOUNT} component={Account} />
          <PrivateRoute exact path={ROUTES.ADMIN} component={Admin} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </AuthProvider>
);

export default App;
