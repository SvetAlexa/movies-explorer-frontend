import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container page__section'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://svetalexa.github.io/how-to-learn/' target='blank' rel='noreferrer'>Статичный сайт</a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://svetalexa.github.io/russian-travel/' target='blank' rel='noreferrer'>Адаптивный сайт</a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://larsik.nomoredomainsrocks.ru' target='blank' rel='noreferrer'>Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
