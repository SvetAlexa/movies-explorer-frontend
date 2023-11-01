import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <p className="page-not-found__code">404</p>
      <p className="page-not-found__text">Страница не найдена</p>
      <Link to={-1} className="page-not-found__button">Назад</Link>
    </div>
  );
}
