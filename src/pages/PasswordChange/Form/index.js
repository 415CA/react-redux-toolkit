import React from 'react';

const PasswordChangeForm = ({ onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label htmlFor='password'>
        Password
        <input name='password' type='password' placeholder='Password' />
      </label>
      <button type='submit'>Reset Password</button>
    </form>
  </div>
);

export default PasswordChangeForm;
