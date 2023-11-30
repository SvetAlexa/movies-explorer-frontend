import React from 'react';
import './SavedDivider.css';

export default function SavedDivider({ isSavedMovies, onClick }) {
  return (
    <section className='optional-section'>
      {
        isSavedMovies ? '' : <button className='optional-section__button' type='button' onClick={onClick}>Ещё</button>
      }
    </section>
  );
}
