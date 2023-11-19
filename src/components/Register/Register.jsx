import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import useFormValidator from '../../hooks/useFormValidator';
import { register, login } from '../../utils/MainApi';
import {
  BAD_REQUEST_CODE,
  CONFLICT_CODE,
  ERROR_CONFLICT,
  ERROR_SERVER_REGISTER,
  ERROR_BAD_REQUEST_SERVER,
} from '../../utils/constants';
import './Register.css';

export default function Register({ setIsLoggedIn, setCurrentUser }) {
  const {
    values,
    formRegisterValidityStatus,
    emailValue,
    nameValue,
    passwordValue,
    errors,
    handleEmailInputChange,
    handleNameInputChange,
    handlePasswordInputChange,
  } = useFormValidator();

  const navigate = useNavigate();

  const [isResponseRegister, setIsResponseRegister] = useState(''); // ошибки от сервера

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsResponseRegister('');
    register(values)
      .then(() => {
        setIsResponseRegister('');
        const { email, name, password } = values;
        login({ email, password })
          .then(() => {
            setIsLoggedIn(true);
            setCurrentUser({ email, name });
            navigate('/movies', { replace: true });
          });
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
        if (err === CONFLICT_CODE) {
          return setIsResponseRegister(ERROR_CONFLICT);
        }
        if (err === BAD_REQUEST_CODE) {
          return setIsResponseRegister(ERROR_BAD_REQUEST_SERVER);
        }
        return setIsResponseRegister(ERROR_SERVER_REGISTER);
      });
  }

  return (
    <main className='main'>
      <AuthForm
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        redirectQuestion='Уже зарегистрированы?'
        linkPath='/signin'
        linkTitle='Войти'
        isValid={formRegisterValidityStatus}
        onSubmit={handleSubmit}
        setIsLoggedIn={setIsLoggedIn}
        isResponse={isResponseRegister}
      >
        <AuthFormInput
          labelText='Имя'
          type='text'
          value={nameValue ?? ''}
          placeholder='Имя'
          name='name'
          minLength={2}
          maxLength={30}
          onChange={handleNameInputChange}
          errorText={errors.name}
        />
        <AuthFormInput
          labelText='E-mail'
          value={emailValue ?? ''}
          placeholder='Email'
          name='email'
          type='email'
          onChange={handleEmailInputChange}
          errorText={errors.email}
        />
        <AuthFormInput
          labelText='Пароль'
          type='password'
          value={passwordValue ?? ''}
          placeholder='Пароль'
          name='password'
          minLength={6}
          maxLength={30}
          onChange={handlePasswordInputChange}
          errorText={errors.password}
        />
      </AuthForm>
    </main>
  );
}
