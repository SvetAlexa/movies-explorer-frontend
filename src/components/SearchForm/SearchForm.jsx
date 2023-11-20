import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm({
  onSubmit, value, isDisabled, onChange, message,
}) {
  return (
    <section className='search-form'>
      <div className='search-form__border'>
        <form className='search-form__form' onSubmit={onSubmit} noValidate>
          <div className='search-form__form-container'>
            <input
              className='search-form__input'
              name='movie'
              placeholder='Фильм'
              value={value}
              disabled={isDisabled}
              onChange={onChange}
              required
            />
            <button className='search-form__button' type='submit'>Найти</button>
          </div>
          <FilterCheckbox />
        </form>
        <span className='search-error'>{message}</span>
      </div>
    </section>
  );
}
