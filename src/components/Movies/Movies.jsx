import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import SearchResultsButton from '../SearchResultsButton/SearchResultsButton';
import './Movies.css';

export default function Movies() {
  return (
    <main className='main'>
      <SearchForm />
      <MoviesCardList />
      <SearchResultsButton />
    </main>
  );
}
