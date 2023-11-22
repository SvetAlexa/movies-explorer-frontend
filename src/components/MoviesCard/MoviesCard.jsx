/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getHoursAndMinutes } from '../../utils/utils';
import { MOVIE_IMAGE_URL } from '../../utils/constants';
import './MoviesCard.css';

export default function MoviesCard({
  movie, isSavedMovies, onDelete, onSaveMovie, savedId, savedMovies,
}) {
  const { pathname } = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (savedId) {
      setIsSaved(true);
    }
  }, [savedId]);

  function handleSaveMovieClick() {
    onSaveMovie(movie);
    setIsSaved(true);
  }

  function handleDeleteMovieClick() {
    onDelete(pathname === '/movies' ? savedId : movie);
    setIsSaved(false);
  }

  return (
    <li className='element'>
      <a className='element__image-container' href={movie.trailerLink} target='blank' rel='noreferrer'>
        <img className='element__image' src={pathname === '/movies' ? `${MOVIE_IMAGE_URL}${movie.image.url}` : `${movie.image}`} alt={movie.nameRU} />
      </a>
      <div className='element__title-container'>
        <h2 className='element__title'>{movie.nameRU}</h2>
        {
          isSavedMovies
            ? <button className='element__delete-button' aria-label='Delete' type='button' onClick={handleDeleteMovieClick} />
            : (
              <button
                className={`element__save-button ${isSaved && 'element__save-button_is_active'}`}
                aria-label='Save'
                type='button'
                onClick={isSaved ? handleDeleteMovieClick : handleSaveMovieClick}
              />
            )
        }
      </div>
      <p className='element__duration'>{getHoursAndMinutes(movie.duration)}</p>
    </li>
  );
}
