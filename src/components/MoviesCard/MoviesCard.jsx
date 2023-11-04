import React, { useState } from 'react';
import getHoursAndMinutes from '../../utils/utils';
import './MoviesCard.css';

export default function MoviesCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleMovieSaveClick() {
    setIsSaved(!isSaved);
  }

  return (
    <li className='element'>
      <div className='element__image-container'>
        <img className='element__image' src={movie.image.url} alt={movie.nameRU} />
      </div>
      <div className='element__title-container'>
        <h2 className='element__title'>{movie.nameRU}</h2>
        <button className={`element__save-button ${isSaved && 'element__save-button_is_active'}`} aria-label='Save' type='button' onClick={handleMovieSaveClick} />
      </div>
      <p className='element__duration'>{getHoursAndMinutes(movie.duration)}</p>
    </li>
  );
}
