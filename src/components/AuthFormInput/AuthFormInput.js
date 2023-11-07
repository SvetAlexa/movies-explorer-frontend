import React from 'react';
import './AuthFormInput.css';

export default function AuthFormInput({
  labelText, type, placeholder, name, errorText, minLength, maxLength,
}) {
  return (
    <li className='auth__input-item'>
      <p className='auth__input-label'>{labelText}</p>
      <input className='auth__input' type={type} name={name} placeholder={placeholder} minLength={minLength} maxLength={maxLength} required />
      <span className='error'>{errorText}</span>
    </li>
  );
}
