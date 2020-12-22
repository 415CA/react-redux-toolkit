import React from 'react';

const SignUpForm = ({ onSubmit, isInvalid, error }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor='email'>
      Email
      <input name='email' type='email' placeholder='Email' />
    </label>
    <label htmlFor='password'>
      Password
      <input name='password' type='password' placeholder='Password' />
    </label>
    <button type='submit' disabled={isInvalid}>
      Sign Up
    </button>
    {error && <p>{error.message}</p>}
  </form>
);

export default SignUpForm;
