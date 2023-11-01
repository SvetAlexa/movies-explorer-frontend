import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer page__container">
      <div className="footer__container page__section">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__info">
          <p className="footer__copyright">© 2023</p>
          <nav className="footer__links">
            <ul className="footer__links-list">
              <li>
                <a className="footer__link" href="https://practicum.yandex.ru/" target="blank" rel="noreferrer">Яндекс.Практикум</a>
              </li>
              <li>
                <a className="footer__link" href="https://github.com/SvetAlexa" target="blank" rel="noreferrer">Github</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
