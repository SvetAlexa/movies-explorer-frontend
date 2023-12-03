import React from 'react';
import { Link } from 'react-router-dom';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import './Header.css';

export default function Header({
  isLanding,
  isLoggedIn,
  isBurgerMenuOpen,
  onMenuButtonCloseClick,
  onMenuButtonOpenClick,
}) {
  return (
    <header className={`header ${isLanding ? 'header_landing' : ''}`}>
      <div className={`header__container page__section ${isLoggedIn ? 'header__container_is_logged' : 'header__container_is_unlogged'}`}>
        {isLanding ? <img className='header__logo' src={Logo} alt='логотип приложения' />
          : <Link to='/' className='header__logo-link'><img className='header__logo' src={Logo} alt='логотип приложения' /></Link>}
        {isLoggedIn
          ? (
            <Navigation
              isLanding={isLanding}
              isBurgerMenuOpen={isBurgerMenuOpen}
              onMenuButtonCloseClick={onMenuButtonCloseClick}
              onMenuButtonOpenClick={onMenuButtonOpenClick}
            />
          )
          : <NavAuth />}
      </div>
    </header>
  );
}
