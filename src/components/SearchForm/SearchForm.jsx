import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__border'>
        <div className='search-form__container page__section'>
          <form className='search-form__form'>
            <input className='search-form__input' name='movie' required placeholder='Фильм' />
            <button className='search-form__button' type='submit'>Найти</button>
          </form>
          <FilterCheckbox />
        </div>
      </div>
    </section>
  );
}
