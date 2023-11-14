import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__border'>
        <form className='search-form__form'>
          <div className='search-form__form-container'>
            <input className='search-form__input' name='movie' required placeholder='Фильм' />
            <button className='search-form__button' type='submit'>Найти</button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}
