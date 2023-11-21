/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { getHoursAndMinutes } from '../../utils/utils';
import { MOVIE_IMAGE_URL } from '../../utils/constants';
import './MoviesCard.css';

export default function MoviesCard({ movie, isSavedMovies }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleMovieSaveClick() {
    setIsSaved(!isSaved);
  }

  return (
    <li className='element'>
      <a className='element__image-container' href={movie.trailerLink} target='blank' rel='noreferrer'>
        <img className='element__image' src={`${MOVIE_IMAGE_URL}${movie.image.url}`} alt={movie.nameRU} />
      </a>
      <div className='element__title-container'>
        <h2 className='element__title'>{movie.nameRU}</h2>
        {
          isSavedMovies
            ? <button className='element__delete-button' aria-label='Delete' type='button' />
            : (
              <button
                className={`element__save-button ${isSaved && 'element__save-button_is_active'}`}
                aria-label='Save'
                type='button'
                onClick={handleMovieSaveClick}
              />
            )
        }
      </div>
      <p className='element__duration'>{getHoursAndMinutes(movie.duration)}</p>
    </li>
  );
}
