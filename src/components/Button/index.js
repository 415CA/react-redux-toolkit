import React from 'react';

const Button = ({ className, children, disabled, type = 'button', onClick, style }) => (
  <button className={className} disabled={disabled} style={style} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
