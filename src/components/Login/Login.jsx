import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import './Login.css';

export default function Login() {
  return (
    <main className='main'>
      <AuthForm
        title='Рады видеть!'
        buttonText='Войти'
        redirectQuestion='Ещё не зарегистрированы?'
        linkPath='/signup'
        linkTitle='Регистрация'
      >
        <AuthFormInput
          labelText='E-mail'
          type='email'
          placeholder='E-mail'
          name='email'
        />
        <AuthFormInput
          labelText='Пароль'
          type='password'
          name='password'
          placeholder='Пароль'
          minLength={6}
          maxLength={30}
        />
      </AuthForm>
    </main>
  );
}
