import React from 'react';
import movies from '../../utils/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

// const movies = [];

export default function MoviesCardList() {
  return (
    <section className='movies-elements page__container'>
      <ul className='movies-elements__lists'>
        {movies.map((item) => (
          <MoviesCard
            key={item.id}
            movie={item}
          />
        ))}
      </ul>
    </section>
  );
}
