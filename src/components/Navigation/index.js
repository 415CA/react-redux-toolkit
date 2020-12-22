import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/slices/User';
import Authorized from './Authorized';
import NonAuthorized from './NonAuthorized';

const Navigation = () => {
  const { authUser } = useSelector(userSelector);

  return authUser ? <Authorized /> : <NonAuthorized />;
};

export default Navigation;
