import React from 'react';

const Input = ({ label, name, defaultValue, type, required }) => {
  return (
    <label htmlFor={name} className='flex flex-col my-3 '>
      <span>{label}</span>
      <input className='my-3 '
        required={required}
        type={type}
        name={name}
        className='input'
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default Input;
