import React from 'react';
import { Link } from 'react-router-dom';
import './NavAuth.css';

export default function NavAuth() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li>
          <Link to="/signup" className="header__nav-link">Регистрация</Link>
        </li>
        <li>
          <Link to="/signin" className="header__nav-link header__nav-link_color">Войти</Link>
        </li>
      </ul>
    </nav>
  );
}
