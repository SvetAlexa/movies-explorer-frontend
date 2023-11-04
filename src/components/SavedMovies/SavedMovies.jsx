/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { savedMovies } from '../../utils/movies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import SavedDivider from '../SavedDivider/SavedDivider';
import './SavedMovies.css';

export default function SavedMovies() {
  return (
    <main className='main'>
      <SearchForm />
      <MoviesCardList movies={savedMovies} isSavedMovies />
      <SavedDivider isSavedMovies />
    </main>
  );
}
