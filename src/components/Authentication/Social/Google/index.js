import firebase from 'firebase/app';
import React from 'react';
import { authentication } from '../../Firebase';

const Google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const authWithGoogle = () => {
    authentication.signInWithPopup(provider);
  };

  return <button onClick={authWithGoogle}>Google Login</button>;
};

export default Google;
