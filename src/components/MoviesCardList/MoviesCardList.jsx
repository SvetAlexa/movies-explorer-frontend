import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ movies, isSavedMovies }) {
  return (
    <section className={`movies-elements ${isSavedMovies ? 'movies-elements_place_saved-movies' : ''}`}>
      <ul className='movies-elements__list'>
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
