/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import getMovies from '../../utils/MoviesApi';
import { INVALID_SEARCH_INPUT, INVALID_SEARCH_NOT_FOUND, ERROR_SERVER_SEARCH } from '../../utils/constants';
import { getFilteredMovies } from '../../utils/utils';
import './Movies.css';

export default function Movies({ savedMovies, onSaveMovie, onDelete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(() => JSON.parse(localStorage.getItem('movies')) || []); // все фильмы от стороннего API (beatfilm)

  const [valueInput, setValueInput] = useState(''); // текущее значение инпута
  const [valueFilteredInput, setValueFilteredInput] = useState(''); // значение инпута после нажатия кнопки "Найти"
  const [messageSearch, setMessageSearch] = useState('');
  const [searchedMovies, setSearchedMovies] = useState(() => JSON.parse(localStorage.getItem('searchedMovies')) || []);
  const [isSearchError, setIsSearchError] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  const [isFormSearchDisabled, setIsFormSearchDisabled] = useState(false);

  function handleInputSearchChange(evt) {
    setValueInput(evt.target.value);
  }

  // отображение результатов последнего поискового запроса при возвращении на страницу
  useEffect(() => {
    if (localStorage.getItem('movies')) {
      setValueInput(localStorage.getItem('searchQuery'));
      setValueFilteredInput(localStorage.getItem('searchQuery'));
    }
  }, []);

  // поиск фильмов из сохраненный базы beatfilm
  useEffect(() => {
    setIsSearchError(false);
    setSearchErrorMessage('');
    if (!isLoading && valueFilteredInput && searchedMovies.length === 0) {
      setIsSearchError(true);
      setSearchErrorMessage(INVALID_SEARCH_NOT_FOUND);
    }
    const resultsFilms = getFilteredMovies(movies, valueFilteredInput);
    setSearchedMovies(resultsFilms);
    localStorage.setItem('searchedMovies', JSON.stringify(resultsFilms));
  }, [movies, searchedMovies.length, valueFilteredInput]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (valueInput === '') {
      setMessageSearch(INVALID_SEARCH_INPUT);
      return;
    }
    setValueFilteredInput(valueInput);
    localStorage.setItem('searchQuery', valueInput);
    if (movies.length > 0) {
      return;
    }
    setMessageSearch('');
    setIsLoading(true);
    setIsFormSearchDisabled(true);
    getMovies()
      .then((films) => {
        setMovies(films);
        localStorage.setItem('movies', JSON.stringify(films));
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
        setIsSearchError(true);
        setSearchErrorMessage(ERROR_SERVER_SEARCH);
      })
      .finally(() => {
        setIsLoading(false);
        setIsFormSearchDisabled(false);
      });
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
      {
        isLoading
          ? (<Preloader />)
          : (
            <MoviesCardList
              movies={searchedMovies}
              isSavedMovies={false}
              isSearchError={isSearchError}
              searchErrorMessage={searchErrorMessage}
              savedMovies={savedMovies}
              onSaveMovie={onSaveMovie}
              onDelete={onDelete}
            />
          )
      }
    </main>
  );
}
