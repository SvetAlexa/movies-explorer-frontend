import React from 'react';
import './AuthFormInput.css';

export default function AuthFormInput({
  labelText, type, value, placeholder, name, errorText,
  minLength, maxLength, pattern, isDisabled, defaultValue,
  classNameList = 'auth__input-item',
  classNameLabel = 'auth__input-label',
  classNameInput = 'auth__input',
  classNameError = 'error',
  onChange,
}) {
  return (
    <li className={classNameList}>
      <label className={classNameLabel}>{labelText}</label>
      <input
        className={classNameInput}
        type={type}
        name={name}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        onChange={onChange}
        disabled={isDisabled}
        required
      />
      <span className={classNameError}>{errorText}</span>
    </li>
  );
}
