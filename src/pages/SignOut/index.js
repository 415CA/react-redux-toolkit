import React from 'react';
import { useDispatch } from 'react-redux';
import { authentication } from '../../components/Authentication/Firebase/Firebase';
import { removeUserStatus } from '../../redux/slices/User';

const SignOutButton = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    authentication.signOut();
    dispatch(removeUserStatus());
  };

  return <button onClick={() => signOut()}>Sign Out</button>;
};

export default SignOutButton;
