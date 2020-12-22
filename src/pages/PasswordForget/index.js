import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { authentication } from '../../components/Authentication/Firebase/Firebase';
import PasswordForgetForm from './Form';
import * as ROUTES from '../../constants/Routes';

const PasswordForget = ({ history }) => {
  const handlePasswordForget = useCallback(
    async (event) => {
      event.preventDefault();
      const { email } = event.target.elements;
      try {
        await authentication.sendPasswordResetEmail(email.value);
        history.push(ROUTES.SIGN_IN);
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  return (
    <div>
      <h1>Password Forget</h1>
      <PasswordForgetForm onSubmit={handlePasswordForget} />
    </div>
  );
};

export default withRouter(PasswordForget);

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export { PasswordForgetForm, PasswordForgetLink };
