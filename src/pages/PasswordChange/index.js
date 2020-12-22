import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { authentication } from '../../components/Authentication/Firebase/Firebase';
import * as ROUTES from '../../constants/Routes';
import PasswordChangeForm from './Form';

const PasswordChange = ({ history }) => {
  const handlePasswordChange = useCallback(
    async (event) => {
      event.preventDefault();
      const { password } = event.target.elements;
      try {
        await authentication.currentUser.updatePassword(password.value);
        history.push(ROUTES.ACCOUNT);
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  return (
    <div>
      <h1>Password Change</h1>
      <PasswordChangeForm onSubmit={handlePasswordChange} />
    </div>
  );
};

export default withRouter(PasswordChange);
