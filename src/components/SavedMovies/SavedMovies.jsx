/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import SavedDivider from '../SavedDivider/SavedDivider';
import { getFilteredMovies } from '../../utils/utils';
import { INVALID_SEARCH_INPUT, INVALID_SEARCH_NOT_FOUND } from '../../utils/constants';
import './SavedMovies.css';

export default function SavedMovies({ savedMovies, setSavedMovies, onDelete }) {
  const [valueInput, setValueInput] = useState(''); // текущее значение инпута
  const [valueFilteredInput, setValueFilteredInput] = useState(''); // значение инпута после нажатия кнопки "Найти"
  const [messageSearch, setMessageSearch] = useState('');
  const [searchedSavedMovies, setSearchedSavedMovies] = useState(savedMovies);
  const [isSearchError, setIsSearchError] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  const [isFormSearchDisabled, setIsFormSearchDisabled] = useState(false);

  function handleInputSearchChange(evt) {
    setValueInput(evt.target.value);
  }

  useEffect(() => {
    setIsSearchError(false);
    setSearchErrorMessage('');
    const resultsFilteredFilms = getFilteredMovies(savedMovies, valueInput);
    setSearchedSavedMovies(resultsFilteredFilms);
    if (valueFilteredInput && searchedSavedMovies.length === 0) {
      setIsSearchError(true);
      setSearchErrorMessage(INVALID_SEARCH_NOT_FOUND);
    }
  }, [valueFilteredInput, savedMovies, searchedSavedMovies.length]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setValueFilteredInput(valueInput);
    if (valueInput === '') {
      setMessageSearch(INVALID_SEARCH_INPUT);
      return;
    }
    setMessageSearch('');
  }

  return (
    <main className='main'>
      <SearchForm
        onSubmit={handleSubmit}
        isDisabled={isFormSearchDisabled}
        value={valueInput}
        onChange={handleInputSearchChange}
        message={messageSearch}
      />
      <MoviesCardList
        isSavedMovies
        movies={searchedSavedMovies}
        isSearchError={isSearchError}
        searchErrorMessage={searchErrorMessage}
        onDelete={onDelete}
      />
      <SavedDivider isSavedMovies />
    </main>
  );
}
