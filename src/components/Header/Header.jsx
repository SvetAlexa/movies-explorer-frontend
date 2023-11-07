import React from 'react';
import { Link } from 'react-router-dom';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import './Header.css';

export default function Header({ isLanding, loggedIn }) {
  return (
    <header className={`header page__container ${isLanding ? 'header_landing' : ''}`}>
      <div className={`header__container page__section ${loggedIn ? 'header__container_is_logged' : 'header__container_is_unlogged'}`}>
        {isLanding ? <img className='header__logo' src={Logo} alt='логотип приложения' />
          : <Link to='/' className='header__logo_link'><img className='header__logo' src={Logo} alt='логотип приложения' /></Link>}
        {loggedIn ? <Navigation isLanding={isLanding} /> : <NavAuth />}
      </div>
    </header>
  );
}
