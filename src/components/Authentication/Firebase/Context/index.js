import React, { useEffect, useState } from 'react';
import { authentication } from '../Firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    authentication.onAuthStateChanged(setCurrentUser);
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export const FirebaseContext = React.createContext();

export const withFirebase = (Component) => (props) => {
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>;
};
