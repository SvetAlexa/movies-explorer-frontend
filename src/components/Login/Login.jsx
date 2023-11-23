import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import useFormValidator from '../../hooks/useFormValidator';
import { login } from '../../utils/MainApi';
import {
  BAD_REQUEST_CODE,
  UNAUTHORIZED_CODE,
  ERROR_BAD_REQUEST_SERVER,
  ERROR_UNAUTHORIZED_LOGIN,
  ERROR_SERVER_LOGIN,
} from '../../utils/constants';
import './Login.css';

export default function Login({ setIsLoggedIn, setCurrentUser }) {
  const {
    values,
    formLoginValidityStatus,
    emailValue,
    passwordValue,
    errors,
    handleEmailInputChange,
    handlePasswordInputChange,
  } = useFormValidator();

  const navigate = useNavigate();

  const [isDisabledInputs, setIsDisabledInputs] = useState(false);
  const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false);

  const [isResponseLogin, setIsResponseLogin] = useState(''); // ошибки от сервера

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsResponseLogin('');
    setIsDisabledInputs(true);
    setIsSubmitButtonDisable(true);
    login(values)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
        setIsDisabledInputs(false);
        setIsSubmitButtonDisable(false);
        if (err === UNAUTHORIZED_CODE) {
          return setIsResponseLogin(ERROR_UNAUTHORIZED_LOGIN);
        }
        if (err === BAD_REQUEST_CODE) {
          return setIsResponseLogin(ERROR_BAD_REQUEST_SERVER);
        }
        return setIsResponseLogin(ERROR_SERVER_LOGIN);
      });
  }

  return (
    <main className='main'>
      <AuthForm
        title='Рады видеть!'
        buttonText='Войти'
        redirectQuestion='Ещё не зарегистрированы?'
        linkPath='/signup'
        linkTitle='Регистрация'
        isValid={formLoginValidityStatus}
        onSubmit={handleSubmit}
        setIsLoggedIn={setIsLoggedIn}
        isDisabled={isSubmitButtonDisable}
        isResponse={isResponseLogin}
      >
        <AuthFormInput
          labelText='E-mail'
          type='email'
          value={emailValue ?? ''}
          placeholder='E-mail'
          name='email'
          onChange={handleEmailInputChange}
          isDisabled={isDisabledInputs}
          errorText={errors.email}
        />
        <AuthFormInput
          labelText='Пароль'
          type='password'
          name='password'
          placeholder='Пароль'
          value={passwordValue ?? ''}
          minLength={6}
          maxLength={30}
          onChange={handlePasswordInputChange}
          isDisabled={isDisabledInputs}
          errorText={errors.password}
        />
      </AuthForm>
    </main>
  );
}
