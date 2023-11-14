import React from 'react';
import './SavedDivider.css';

export default function SavedDivider({ isSavedMovies }) {
  return (
    <section className='optional-section'>
      {
        isSavedMovies ? '' : <button className='optional-section__button' type='button'>Ещё</button>
      }
    </section>
  );
}
