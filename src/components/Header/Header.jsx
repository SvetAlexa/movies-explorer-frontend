import React from 'react';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import './Header.css';

export default function Header({ isLanding }) {
  const loggedIn = true;

  return (
    <header className={`header page__container ${isLanding ? 'header_landing' : ''}`}>
      <div className={`header__container page__section ${loggedIn ? 'header__container_is_logged' : 'header__container_is_unlogged'}`}>
        <img className='header__logo' src={Logo} alt='логотип приложения' />
        {loggedIn ? <Navigation isLanding={isLanding} /> : <NavAuth />}
      </div>
    </header>
  );
}
