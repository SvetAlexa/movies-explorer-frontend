import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

// const movies = [];

export default function MoviesCardList({ movies, isSavedMovies }) {
  return (
    <section className={`movies-elements page__container ${isSavedMovies ? 'movies-elements_place_saved-movies' : ''}`}>
      <ul className='movies-elements__lists'>
        {movies.map((item) => (
          <MoviesCard
            key={item.id}
            movie={item}
            isSavedMovies={isSavedMovies}
          />
        ))}
      </ul>
    </section>
  );
}
