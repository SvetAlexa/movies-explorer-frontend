import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
// import SavedDivider from '../SavedDivider/SavedDivider';
import getMovies from '../../utils/MoviesApi';
import './Movies.css';

export default function Movies() {
  const [isLoading, setIsLoding] = useState(false);
  const [movies, setMovies] = useState([]); // фильмы от стороннего API

  const [valueSearchInput, setValueSearchInput] = useState('');
  const [messageSearch, setMessageSearch] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isInputSearchDisabled, setIsInputSearchDisabled] = useState(false);

  function handleInputSearchChange(evt) {
    setValueSearchInput(evt.target.value);
  }

  useEffect(() => {
    const results = movies.filter((movie) => movie.nameRU.toLowerCase()
      .includes(valueSearchInput));
    setSearchedMovies(results);
    console.log(searchedMovies);
  }, [movies, valueSearchInput]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (valueSearchInput === '') {
      setMessageSearch('Нужно ввести хоть что-то');
      return;
    }
    setMessageSearch('');
    setIsLoding(true);
    setIsInputSearchDisabled(true);
    getMovies()
      .then((films) => {
        setMovies(films);
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      })
      .finally(() => {
        setIsLoding(false);
        setIsInputSearchDisabled(false);
      });
    console.log(movies);
  }

  return (
    <main className='main'>
      <SearchForm
        onSubmit={handleSubmit}
        isDisabled={isInputSearchDisabled}
        value={valueSearchInput}
        onChange={handleInputSearchChange}
        message={messageSearch}
      />
      {
        isLoading
          ? (<Preloader />)
          : (
            <MoviesCardList movies={searchedMovies} isSavedMovies={false} />
            /* { <SavedDivider isSavedMovies={false} /> } */
          )
      }
    </main>
  );
}
