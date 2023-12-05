/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import SavedDivider from '../SavedDivider/SavedDivider';
import { getFilteredMovies, getShortsFilteredMovies } from '../../utils/utils';
import { INVALID_SEARCH_INPUT, INVALID_SEARCH_NOT_FOUND } from '../../utils/constants';
import './SavedMovies.css';

export default function SavedMovies({ savedMovies, onDelete }) {
  const [valueInput, setValueInput] = useState(''); // текущее значение инпута
  const [valueFilteredInput, setValueFilteredInput] = useState(''); // значение инпута после нажатия кнопки "Найти"
  const [messageSearch, setMessageSearch] = useState('');
  const [searchedSavedMovies, setSearchedSavedMovies] = useState(savedMovies);
  const [isSearchError, setIsSearchError] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  function handleInputSearchChange(evt) {
    setValueInput(evt.target.value);
  }

  useEffect(() => {
    setIsSearchError(false);
    setSearchErrorMessage('');
    const resultsFilteredFilms = getFilteredMovies(savedMovies, valueInput);
    setSearchedSavedMovies(resultsFilteredFilms);
    if (isChecked) {
      const resultsFilteredFilmsWithCheckbox = getShortsFilteredMovies(resultsFilteredFilms);
      setSearchedSavedMovies(resultsFilteredFilmsWithCheckbox);
      if (resultsFilteredFilmsWithCheckbox.length === 0) {
        setIsSearchError(true);
        setSearchErrorMessage(INVALID_SEARCH_NOT_FOUND);
      }
    }
    if (valueFilteredInput && searchedSavedMovies.length === 0) {
      setIsSearchError(true);
      setSearchErrorMessage(INVALID_SEARCH_NOT_FOUND);
    }
  }, [valueFilteredInput, savedMovies, searchedSavedMovies.length, isChecked]);

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
        value={valueInput}
        onChange={handleInputSearchChange}
        message={messageSearch}
        setIsChecked={setIsChecked}
        isChecked={isChecked}
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
