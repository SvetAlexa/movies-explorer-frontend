/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedDivider from '../SavedDivider/SavedDivider';
import { deviceSize } from '../../utils/constants';
import './MoviesCardList.css';

export default function MoviesCardList({
  movies, isSavedMovies, isSearchError, searchErrorMessage, onDelete, onSaveMovie, savedMovies,
}) {
  const { pathname } = useLocation();
  const [moviesQuantity, setMoviesQuantity] = useState(0);

  function getMoviesDisplayQuantity() {
    const display = document.documentElement.clientWidth;
    if (display >= deviceSize.desktop.width) {
      setMoviesQuantity(deviceSize.desktop.quantity);
    }
    if (display >= deviceSize.bigTablet.width && display < deviceSize.desktop.width) {
      setMoviesQuantity(+deviceSize.bigTablet.quantity);
    }
    if (display >= deviceSize.tablet.width && display < deviceSize.bigTablet.width) {
      setMoviesQuantity(deviceSize.tablet.quantity);
    }
    if (display <= deviceSize.mobile.width) {
      setMoviesQuantity(deviceSize.mobile.quantity);
    }
  }

  useEffect(() => {
    getMoviesDisplayQuantity();
  }, [movies]);

  useEffect(() => {
    const handleResizeWindow = () => {
      getMoviesDisplayQuantity();
    };

    window.addEventListener('resize', handleResizeWindow);

    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  function handleShowMoreMovies() {
    const display = document.documentElement.clientWidth;
    if (display >= deviceSize.desktop.width) {
      setMoviesQuantity(moviesQuantity + deviceSize.desktop.increase);
    }
    if (display >= deviceSize.bigTablet.width && display < deviceSize.desktop.width) {
      setMoviesQuantity(moviesQuantity + deviceSize.bigTablet.increase);
    }
    if (display >= deviceSize.tablet.width && display < deviceSize.bigTablet.width) {
      setMoviesQuantity(moviesQuantity + deviceSize.tablet.increase);
    }
    if (display <= deviceSize.mobile.width) {
      setMoviesQuantity(moviesQuantity + deviceSize.mobile.increase);
    }
  }
  return (
    isSearchError ? (
      <section className='movies-elements'>
        <p className='movies-elements__error'>{searchErrorMessage}</p>
      </section>
    ) : (
      <>
        {pathname === '/movies'
          && (
            <>
              <section className={`movies-elements ${!(movies.length > moviesQuantity) || isSavedMovies ? 'movies-elements_place_saved-movies' : ''}`}>
                <ul className='movies-elements__list'>
                  {movies.slice(0, moviesQuantity).map((item) => {
                    let movieSavedId;
                    savedMovies.forEach((savedMovie) => {
                      if (savedMovie.movieId === item.id) {
                        movieSavedId = savedMovie._id;
                      }
                    });
                    return (
                      <MoviesCard
                        key={item.id}
                        movie={item}
                        isSavedMovies={isSavedMovies}
                        onSaveMovie={onSaveMovie}
                        onDelete={onDelete}
                        movieSavedId={movieSavedId}
                        savedMovies={savedMovies}
                      />
                    );
                  })}
                </ul>
              </section>
              {movies.length > moviesQuantity
                && <SavedDivider isSavedMovies={isSavedMovies} onClick={handleShowMoreMovies} />}
            </>
          )}
        {pathname === '/saved-movies'
          && (
            <section className={`movies-elements ${isSavedMovies ? 'movies-elements_place_saved-movies' : ''}`}>
              <ul className='movies-elements__list'>
                {movies?.map((item) => (
                  <MoviesCard
                    key={item._id}
                    movie={item}
                    isSavedMovies={isSavedMovies}
                    onDelete={onDelete}
                  />
                ))}
              </ul>
            </section>
          )}
      </>
    )
  );
}
