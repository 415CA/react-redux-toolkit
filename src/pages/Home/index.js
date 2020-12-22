import React from 'react';
import { authentication } from '../../components/Authentication/Firebase/Firebase';

const Home = () => (
  <>
    <h1>Home</h1>
    <button onClick={() => authentication.signOut()}>Sign Out</button>
  </>
);

export default Home;
