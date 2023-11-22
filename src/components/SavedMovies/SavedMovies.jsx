/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import SavedDivider from '../SavedDivider/SavedDivider';
import './SavedMovies.css';

export default function SavedMovies({ savedMovies, onDelete }) {
  const [isLoading, setIsLoading] = useState(false);

  console.log(savedMovies);
  return (
    <main className='main'>
      {
        isLoading
          ? (<Preloader />)
          : (
            <>
              <SearchForm />
              <MoviesCardList
                isSavedMovies
                movies={savedMovies}
                onDelete={onDelete}
              />
              <SavedDivider isSavedMovies />
            </>
          )
      }
    </main>
  );
}
