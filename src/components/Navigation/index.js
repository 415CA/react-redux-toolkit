import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Firebase/Context';
import Authorized from './Authorized';
import NonAuthorized from './NonAuthorized';
import Private from '../Authentication/Private';

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Private component={Authorized} /> : <NonAuthorized />;
};

export default Navigation;
