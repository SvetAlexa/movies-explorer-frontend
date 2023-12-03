import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenuBurger.css';

export default function NavMenuBurger({
  onMenuButtonCloseClick, isBurgerMenuOpen,
}) {
  useEffect(() => {
    if (isBurgerMenuOpen) {
      // объявляем внутри `useEffect` функцию, чтобы она не теряла ссылку при перерисовке компонента
      const closeByEscape = (evt) => {
        if (evt.key === 'Escape') {
          onMenuButtonCloseClick();
        }
      };
      console.log(isBurgerMenuOpen);

      document.addEventListener('keydown', closeByEscape);

      return () => document.removeEventListener('keydown', closeByEscape);
    }
  }, [isBurgerMenuOpen, onMenuButtonCloseClick]);

  function handleOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      onMenuButtonCloseClick();
    }
  }

  console.log(isBurgerMenuOpen);

  return (
    <div className={`nav-menu ${isBurgerMenuOpen ? 'nav-menu_is_opened' : ''}`} onClick={handleOverlay} aria-hidden>
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
                onClick={onMenuButtonCloseClick}
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
                onClick={onMenuButtonCloseClick}
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
                onClick={onMenuButtonCloseClick}
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
          onClick={onMenuButtonCloseClick}
        >
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
}
