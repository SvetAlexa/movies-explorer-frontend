import React from 'react';
import NavAuth from '../NavAuth/NavAuth';
import Logo from '../../images/logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header className="header page__container">
      <div className="header__container page__section">
        <img className="header__logo" src={Logo} alt="логотип приложения" />
        <NavAuth />
      </div>
    </header>
  );
}
