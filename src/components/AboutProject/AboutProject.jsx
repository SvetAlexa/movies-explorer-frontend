import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project page__container">
      <div className="about-project__container page__section">
        <h2 className="about-project__title page__section-title">О проекте</h2>
        <ul className="about-project__articles">
          <li>
            <article className="article">
              <h3 className="article__title">Дипломный проект включал 5 этапов</h3>
              <p className="article__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </article>
          </li>
          <li>
            <article className="article">
              <h3 className="article__title">На выполнение диплома ушло 5 недель</h3>
              <p className="article__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </article>
          </li>
        </ul>
        <div className="schema">
          <ul className="schema__items">
            <li>
              <p className="schema__time schema__time_color">1 неделя</p>
              <p className="schema__text">Back-end</p>
            </li>
            <li>
              <p className="schema__time">4 недели</p>
              <p className="schema__text">Front-end</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
