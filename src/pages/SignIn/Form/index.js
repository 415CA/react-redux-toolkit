import React from 'react';

const SignInForm = ({ onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label htmlFor='email'>
        Email
        <input name='email' type='email' placeholder='Email' />
      </label>
      <label htmlFor='password'>
        Password
        <input name='password' type='password' placeholder='Password' />
      </label>
      <button type='submit'>Sign in</button>
    </form>
  </div>
);

export default SignInForm;
