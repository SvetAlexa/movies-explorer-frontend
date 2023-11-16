import { useState } from 'react';
import {
  EMAIL_REGEX, NAME_REGEX, INVALID_INPUT, INVALID_EMAIL, INVALID_NAME_LENGTH, INVALID_NAME,
} from '../utils/constants';

export default function useFormValidator() {
  const [values, setValues] = useState('');
  const [errors, setErrors] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleInputChange(evt) {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
    const inputName = evt.target.name;
    if (inputName === 'email') {
      const regexEmail = new RegExp(EMAIL_REGEX);
      if (value === '') {
        return setErrors({ ...errors, [name]: INVALID_INPUT });
      }
      if (!regexEmail.test(evt.target.value)) {
        return setErrors({ ...errors, [name]: INVALID_EMAIL });
      }
      return setErrors({ ...errors, [name]: '' });
    }
    if (inputName === 'name') {
      const regexName = new RegExp(NAME_REGEX);
      if (value === '') {
        return setErrors({ ...errors, [name]: INVALID_INPUT });
      }
      if (value.length < 2) {
        return setErrors({ ...errors, [name]: INVALID_NAME_LENGTH });
      }
      if (!regexName.test(evt.target.value)) {
        return setErrors({ ...errors, [name]: INVALID_NAME });
      }
      return setErrors({ ...errors, [name]: '' });
    }
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());
  }

  return ({
    values, errors, setErrors, handleInputChange, setValues, isValid, setIsValid,
  });
}
