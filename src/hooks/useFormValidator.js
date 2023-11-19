import { useState } from 'react';
import {
  EMAIL_REGEX, NAME_REGEX, INVALID_INPUT, INVALID_EMAIL, INVALID_NAME_LENGTH, INVALID_NAME,
} from '../utils/constants';

export default function useFormValidator() {
  const [emailValue, setEmailValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [nameValue, setNameValue] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [passwordValue, setPasswordValue] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  function handleEmailInputChange(evt) {
    const inputValue = evt.target.value;
    const inputName = evt.target.name;
    setEmailValue(inputValue);
    const regexEmail = new RegExp(EMAIL_REGEX);
    if (inputValue === '') {
      setIsValidEmail(false);
      return setErrors({ ...errors, [inputName]: INVALID_INPUT });
    }
    if (!regexEmail.test(inputValue)) {
      setIsValidEmail(false);
      return setErrors({ ...errors, [inputName]: INVALID_EMAIL });
    }
    setIsValidEmail(true);
    setErrors({ ...errors, [inputName]: '' });
    setValues({ ...values, [inputName]: inputValue });
  }

  function handleNameInputChange(evt) {
    const inputValue = evt.target.value;
    const inputName = evt.target.name;
    setNameValue(inputValue);
    const regexName = new RegExp(NAME_REGEX);
    if (inputValue === '') {
      setIsValidName(false);
      return setErrors({ ...errors, [inputName]: INVALID_INPUT });
    }
    if (inputValue.length < 2) {
      setIsValidName(false);
      return setErrors({ ...errors, [inputName]: INVALID_NAME_LENGTH });
    }
    if (!regexName.test(evt.target.value)) {
      setIsValidName(false);
      return setErrors({ ...errors, [inputName]: INVALID_NAME });
    }
    setIsValidName(true);
    setErrors({ ...errors, [inputName]: '' });
    setValues({ ...values, [inputName]: inputValue });
  }

  function handlePasswordInputChange(evt) {
    const inputValue = evt.target.value;
    const inputName = evt.target.name;
    setPasswordValue(inputValue);
    if (inputValue === '') {
      setIsValidPassword(false);
      return setErrors({ ...errors, [inputName]: INVALID_INPUT });
    }
    if (inputValue.length < 6) {
      setIsValidPassword(false);
      return setErrors({ ...errors, [inputName]: evt.target.validationMessage });
    }
    setIsValidPassword(true);
    setErrors({ ...errors, [inputName]: '' });
    setValues({ ...values, [inputName]: inputValue });
  }

  const formProfileValidityStatus = (isValidEmail && isValidName);

  const formLoginValidityStatus = (isValidEmail && isValidPassword);

  const formRegisterValidityStatus = (isValidEmail && isValidName && isValidPassword);

  return ({
    values,
    setValues,
    formProfileValidityStatus,
    formLoginValidityStatus,
    formRegisterValidityStatus,
    emailValue,
    nameValue,
    passwordValue,
    setEmailValue,
    setNameValue,
    errors,
    handleEmailInputChange,
    handleNameInputChange,
    handlePasswordInputChange,
  });
}
