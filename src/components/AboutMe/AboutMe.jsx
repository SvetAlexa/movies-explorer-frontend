import React from 'react';
import Avatar from '../../images/avatar.jpg';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className='about-me page__container'>
      <div className='about-me__container page__section'>
        <h2 className='about-me__title page__section-title'>Студент</h2>
        <article className='about-me__article'>
          <div className='about-me__resume'>
            <h2 className='about-me__name'>Виталий</h2>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='about-me__link' href='https://github.com/SvetAlexa' target='blank' rel='noreferrer'>Github</a>
          </div>
          <img className='about-me__avatar' src={Avatar} alt='фотография студента' />
        </article>
      </div>
    </section>
  );
}
