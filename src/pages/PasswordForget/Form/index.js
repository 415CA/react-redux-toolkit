import React from 'react';

const PasswordForgetForm = ({ onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label htmlFor='email'>
        Email
        <input name='email' type='email' placeholder='Email' />
      </label>
      <button type='submit'>Reset Password</button>
    </form>
  </div>
);

export default PasswordForgetForm;
