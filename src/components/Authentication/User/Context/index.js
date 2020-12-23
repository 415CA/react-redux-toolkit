import React, { useEffect, useState } from 'react';
import { authentication } from '../../Firebase';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    authentication.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
