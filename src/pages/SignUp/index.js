import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { authentication } from '../../components/Authentication/Firebase/Firebase';
import * as ROUTES from '../../constants/Routes';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await authentication.createUserWithEmailAndPassword(email.value, password.value);
        history.push(ROUTES.HOME);
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor='email'>
          Email
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label htmlFor='password'>
          Password
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
