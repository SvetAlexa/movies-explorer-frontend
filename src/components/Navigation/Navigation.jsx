import React from 'react';
import { NavLink } from 'react-router-dom';
import NavMenuBurger from '../NavMenuBurger/NavMenuBurger';
import './Navigation.css';

export default function Navigation({
  isLanding, isBurgerMenuOpen, onMenuButtonCloseClick, onMenuButtonOpenClick,
}) {
  return (
    <>
      <nav className='nav-auth'>
        <ul className='nav-auth__list'>
          <li className='nav-auth__item'>
            <NavLink
              to='/movies'
              className={
                ({ isActive }) => `nav-auth__link ${isActive ? 'nav-auth__link_is_active' : ''}`
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className='nav-auth__item'>
            <NavLink
              to='/saved-movies'
              className={
                ({ isActive }) => `nav-auth__link ${isActive ? 'nav-auth__link_is_active' : ''}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className='nav-auth__item'>
            <NavLink
              to='/profile'
              className={
                ({ isActive }) => `nav-auth__accout-button ${isLanding
                  ? 'nav-auth__accout-button_place_landing'
                  : 'nav-auth__accout-button_place_movies'}
              ${isActive ? 'nav-auth__accout-button_is_active' : ''}`
              }
            >
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`nav-burger ${isBurgerMenuOpen ? 'nav-burger_is_hidden' : ''}`}>
        <button className='nav-burger__button' type='button' onClick={onMenuButtonOpenClick}>
          <span className='nav-burger__line' />
          <span className='nav-burger__line' />
          <span className='nav-burger__line' />
        </button>
      </div>
      <NavMenuBurger
        onMenuButtonCloseClick={onMenuButtonCloseClick}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
    </>
  );
}
