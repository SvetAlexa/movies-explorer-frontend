import React from 'react';
import { initialMovies } from '../../utils/movies';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import SavedDivider from '../SavedDivider/SavedDivider';
import './Movies.css';

// const initialMovies = [];

export default function Movies() {
  const isLoading = false;

  return (
    <main className='main'>
      {
        isLoading
          ? (<Preloader />)
          : (
            <>
              <SearchForm />
              <MoviesCardList movies={initialMovies} isSavedMovies={false} />
              <SavedDivider isSavedMovies={false} />
            </>
          )
      }
    </main>
  );
}
