import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className="techs page__container">
      <div className="techs__container page__section">
        <h2 className="techs__title page__section-title">Технологии</h2>
        <article className="techs__article">
          <p className="techs__article-title">7 технологий</p>
          <p className="techs__article-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__article-list">
            <li className="techs__article-item">HTML</li>
            <li className="techs__article-item">CSS</li>
            <li className="techs__article-item">JS</li>
            <li className="techs__article-item">React</li>
            <li className="techs__article-item">Git</li>
            <li className="techs__article-item">Express.js</li>
            <li className="techs__article-item">mongoDB</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
