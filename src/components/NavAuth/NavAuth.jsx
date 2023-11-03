import React from 'react';
import { Link } from 'react-router-dom';
import './NavAuth.css';

export default function NavAuth() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li>
          <Link to='/signup' className='nav__link'>Регистрация</Link>
        </li>
        <li>
          <Link to='/signin' className='nav__link nav__link_color'>Войти</Link>
        </li>
      </ul>
    </nav>
  );
}
