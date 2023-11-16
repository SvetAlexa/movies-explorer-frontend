import React from 'react';
import './AuthFormInput.css';

export default function AuthFormInput({
  labelText, type, value, placeholder, name, errorText, minLength, maxLength, pattern, onChange,
}) {
  return (
    <li className='auth__input-item'>
      <label className='auth__input-label'>{labelText}</label>
      <input
        className='auth__input'
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        onChange={onChange}
        required
      />
      <span className='error'>{errorText}</span>
    </li>
  );
}
