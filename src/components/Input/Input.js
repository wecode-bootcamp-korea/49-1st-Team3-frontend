import React from 'react';
import './Input.scss';

const Input = props => {
  const {
    type,
    value,
    placeholder,
    onChange,
    name,
    scale,
    className = 'inputBox',
  } = props;
  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      scale={scale}
    />
  );
};
export default Input;
