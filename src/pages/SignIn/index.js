import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from 'react-router';
import { authentication } from '../../components/Authentication/Firebase/Firebase';
import { AuthContext } from '../../components/Authentication/Firebase/Context';
import * as ROUTES from '../../constants/Routes';

const SignIn = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await authentication.signInWithEmailAndPassword(email.value, password.value);
        history.push(ROUTES.HOME);
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
