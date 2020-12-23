import React, { useContext } from 'react';
import { UserContext } from '../../components/Authentication/User';
import PasswordChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';

const Account = () => {
  const currentUser = useContext(UserContext);
  return (
    <div>
      <h1>Account Page</h1>
      {currentUser && (
        <>
          <img src={currentUser.photoURL} width='100' height='100' alt='avatar' />
          <p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p>
        </>
      )}
      <PasswordForget />
      <PasswordChange />
    </div>
  );
};

export default Account;
