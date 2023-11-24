import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedDivider from '../SavedDivider/SavedDivider';
import { DEVICE_SIZE } from '../../utils/constants';
import './MoviesCardList.css';

export default function MoviesCardList({
  movies, isSavedMovies, isSearchError, searchErrorMessage, onDelete, onSaveMovie, savedMovies,
}) {
  const { pathname } = useLocation();
  const [moviesQuantity, setMoviesQuantity] = useState(0);

  function getMoviesDisplayQuantity() {
    const display = document.documentElement.clientWidth;
    if (display >= DEVICE_SIZE.desktop.width) {
      setMoviesQuantity(DEVICE_SIZE.desktop.quantity);
    }
    if (display >= DEVICE_SIZE.bigTablet.width && display < DEVICE_SIZE.desktop.width) {
      setMoviesQuantity(+DEVICE_SIZE.bigTablet.quantity);
    }
    if (display >= DEVICE_SIZE.tablet.width && display < DEVICE_SIZE.bigTablet.width) {
      setMoviesQuantity(DEVICE_SIZE.tablet.quantity);
    }
    if (display <= DEVICE_SIZE.mobile.width) {
      setMoviesQuantity(DEVICE_SIZE.mobile.quantity);
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
    if (display >= DEVICE_SIZE.desktop.width) {
      setMoviesQuantity(moviesQuantity + DEVICE_SIZE.desktop.increase);
    }
    if (display >= DEVICE_SIZE.bigTablet.width && display < DEVICE_SIZE.desktop.width) {
      setMoviesQuantity(moviesQuantity + DEVICE_SIZE.bigTablet.increase);
    }
    if (display >= DEVICE_SIZE.tablet.width && display < DEVICE_SIZE.bigTablet.width) {
      setMoviesQuantity(moviesQuantity + DEVICE_SIZE.tablet.increase);
    }
    if (display <= DEVICE_SIZE.mobile.width) {
      setMoviesQuantity(moviesQuantity + DEVICE_SIZE.mobile.increase);
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
