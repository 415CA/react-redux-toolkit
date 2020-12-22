import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/Routes';
import SignOutButton from '../../../pages/SignOut';

const Authorized = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

export default Authorized;
