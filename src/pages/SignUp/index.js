import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { authentication } from '../../components/Authentication/Firebase/Firebase';
import * as ROUTES from '../../constants/Routes';
import SignUpForm from './Form';

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
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUp);

export { SignUpLink, SignUpForm };
