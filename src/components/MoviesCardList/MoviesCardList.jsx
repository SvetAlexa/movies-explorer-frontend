import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

export default function MoviesCardList({ movies, isSavedMovies }) {
  const isLoading = false;

  return (
    <section className={`movies-elements page__container ${isSavedMovies ? 'movies-elements_place_saved-movies' : ''}`}>
      {
        isLoading
          ? (<Preloader />)
          : (
            <ul className='movies-elements__lists'>
              {movies.map((item) => (
                <MoviesCard
                  key={item.id}
                  movie={item}
                  isSavedMovies={isSavedMovies}
                />
              ))}
            </ul>
          )
      }
    </section>
  );
}
