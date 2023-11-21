import React from 'react';
import './SavedDivider.css';

export default function SavedDivider({ isEmpty, onClick }) {
  return (
    <section className='optional-section'>
      {
        isEmpty ? '' : <button className='optional-section__button' type='button' onClick={onClick}>Ещё</button>
      }
    </section>
  );
}
