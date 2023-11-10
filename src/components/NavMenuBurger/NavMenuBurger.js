import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenuBurger.css';

export default function NavMenuBurger({ onMenuButtonCloseClick, isBurgerMenuOpen }) {
  return (
    <div className={`nav-menu ${isBurgerMenuOpen ? 'nav-menu_is_opened' : ''}`}>
      <div className='nav-menu__container'>
        <button className='nav-menu__close-button' type='button' aria-label='Close' onClick={onMenuButtonCloseClick} />
        <nav className='nav-menu__links'>
          <ul className='nav-menu__list'>
            <li className='nav-menu__item'>
              <NavLink
                to='/'
                className={
                  ({ isActive }) => `nav-menu__link ${isActive ? 'nav-menu__link_is_active' : ''}`
                }
              >
                Главная
              </NavLink>
            </li>
            <li className='nav-menu__item'>
              <NavLink
                to='/movies'
                className={
                  ({ isActive }) => `nav-menu__link ${isActive ? 'nav-menu__link_is_active' : ''}`
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li className='nav-menu__item'>
              <NavLink
                to='/saved-movies'
                className={
                  ({ isActive }) => `nav-menu__link ${isActive ? 'nav-menu__link_is_active' : ''}`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink
          to='/profile'
          className={
            ({ isActive }) => `nav-menu__accout-button
              ${isActive ? 'nav-menu__accout-button_is_active' : ''}`
          }
        >
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
}
