import React, { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { AuthContext } from '../../components/Authentication/Firebase/Context';
import { authentication } from '../../components/Authentication/Firebase/Firebase';
import * as ROUTES from '../../constants/Routes';
import { setUserStatus } from '../../redux/slices/User';

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
      <form onSubmit={handleLogin}>
        <label htmlFor='email'>
          Email
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label htmlFor='password'>
          Password
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
