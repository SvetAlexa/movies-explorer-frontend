import React from 'react';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <p className="page-not-found__code">404</p>
      <p className="page-not-found__text">Страница не найдена</p>
      <button className="page-not-found__button" type="button">Назад</button>
    </div>
  );
}
