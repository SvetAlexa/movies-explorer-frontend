/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import useFormValidator from '../../hooks/useFormValidator';
import './Register.css';

export default function Register({ onRegister, isResponseRegister }) {
  const {
    values, errors, setErrors, handleInputChange, setValues, isValid, setIsValid,
  } = useFormValidator();

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(values);
    onRegister(values);
  }

  return (
    <main className='main'>
      <AuthForm
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        redirectQuestion='Уже зарегистрированы?'
        linkPath='/signin'
        linkTitle='Войти'
        onSubmit={handleSubmit}
        isResponseRegister={isResponseRegister}
      >
        <AuthFormInput
          labelText='Имя'
          type='text'
          value={values.name ?? ''}
          placeholder='Имя'
          name='name'
          minLength={2}
          maxLength={30}
          onChange={handleInputChange}
          errorText={errors.name}
        />
        <AuthFormInput
          labelText='E-mail'
          value={values.email ?? ''}
          placeholder='Email'
          name='email'
          onChange={handleInputChange}
          errorText={errors.email}
        />
        <AuthFormInput
          labelText='Пароль'
          type='password'
          value={values.password ?? ''}
          placeholder='Пароль'
          name='password'
          minLength={6}
          maxLength={30}
          onChange={handleInputChange}
          errorText={errors.password}
        />
      </AuthForm>
    </main>
  );
}
