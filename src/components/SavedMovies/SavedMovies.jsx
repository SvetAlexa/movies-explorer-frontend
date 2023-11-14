import React from 'react';
import { savedMovies } from '../../utils/movies';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import SavedDivider from '../SavedDivider/SavedDivider';
import './SavedMovies.css';

// const savedMovies = [];

export default function SavedMovies() {
  const isLoading = false;

  return (
    <main className='main'>
      {
        isLoading
          ? (<Preloader />)
          : (
            <>
              <SearchForm />
              <MoviesCardList movies={savedMovies} isSavedMovies />
              <SavedDivider isSavedMovies />
            </>
          )
      }
    </main>
  );
}
