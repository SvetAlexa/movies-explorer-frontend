import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './AuthForm.css';

export default function AuthForm({
  title,
  buttonText, redirectQuestion, linkPath, linkTitle, children, onSubmit, isResponseRegister,
}) {
  return (
    <section className='auth'>
      <Link to='/' className='auth__link'>
        <img className='auth__logo' src={Logo} alt='логотип приложения' />
      </Link>
      <h1 className='auth__title'>{title}</h1>
      <form className='auth__form' onSubmit={onSubmit} noValidate>
        <ul className='auth__form-list'>
          {children}
        </ul>
        {/* <span className='auth__error'>При авторизации произошла ошибка.
        Токен не передан или передан не в том формате.</span> */}
        <span className='auth__error'>{isResponseRegister}</span>
        <button className='auth__button' type='submit'>{buttonText}</button>
      </form>
      <div className='auth__redirect-container'>
        <p className='auth__redirect-question'>{redirectQuestion}</p>
        <Link to={linkPath} className='auth__redirect-link'>{linkTitle}</Link>
      </div>
    </section>
  );
}
