import React, { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { AuthContext } from '../../components/Authentication/Firebase/Context';
import { authentication } from '../../components/Authentication/Firebase/Firebase';
import * as ROUTES from '../../constants/Routes';
import { setUserStatus } from '../../redux/slices/User';
import SignInForm from './Form';
import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';
import Google from '../../components/Authentication/Social';

const SignIn = ({ history }) => {
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await authentication.signInWithEmailAndPassword(email.value, password.value);
        history.push(ROUTES.HOME);
        dispatch(setUserStatus(email.value));
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <div>
      <h1>Sign in</h1>
      <SignInForm onSubmit={handleLogin} />
      <Google />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  );
};

export default withRouter(SignIn);
