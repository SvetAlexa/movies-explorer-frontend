import React from 'react';
import { useLocation } from 'react-router-dom';
import { getHoursAndMinutes } from '../../utils/utils';
import { MOVIE_IMAGE_URL } from '../../utils/constants';
import './MoviesCard.css';

export default function MoviesCard({
  movie, isSavedMovies, onDelete, onSaveMovie, movieSavedId,
}) {
  const { pathname } = useLocation();

  function handleSaveMovieClick() {
    onSaveMovie(movie);
  }

  function handleDeleteMovieClick() {
    onDelete(pathname === '/movies' ? movieSavedId : movie);
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
                className={`element__save-button ${movieSavedId && 'element__save-button_is_active'}`}
                aria-label='Save'
                type='button'
                onClick={movieSavedId ? handleDeleteMovieClick : handleSaveMovieClick}
              />
            )
        }
      </div>
      <p className='element__duration'>{getHoursAndMinutes(movie.duration)}</p>
    </li>
  );
}
