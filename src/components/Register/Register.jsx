import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import './Register.css';

export default function Register() {
  return (
    <main className='main'>
      <AuthForm
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        redirectQuestion='Уже зарегистрированы?'
        linkPath='/signin'
        linkTitle='Войти'
      >
        <AuthFormInput
          labelText='Имя'
          type='text'
          placeholder='Имя'
          name='name'
          minLength={2}
          maxLength={30}
        />
        <AuthFormInput
          labelText='E-mail'
          type='email'
          placeholder='Email'
          name='email'
        />
        <AuthFormInput
          labelText='Пароль'
          type='password'
          placeholder='Пароль'
          name='password'
          errorText='Что-то пошло не так...'
          minLength={6}
          maxLength={30}
        />
      </AuthForm>
    </main>
  );
}
