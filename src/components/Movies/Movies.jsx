import React from 'react';
import { initialMovies } from '../../utils/movies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import SavedDivider from '../SavedDivider/SavedDivider';
import './Movies.css';

// const movies = [];

export default function Movies() {
  return (
    <main className='main'>
      <SearchForm />
      <MoviesCardList movies={initialMovies} isSavedMovies={false} />
      <SavedDivider isSavedMovies={false} />
    </main>
  );
}
