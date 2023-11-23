import { SHORT_MOVIE_MAX_DURATION, MINUTES_PER_HOUR } from './constants';

export function getHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % MINUTES_PER_HOUR;
  const hours = Math.floor(totalMinutes / MINUTES_PER_HOUR);

  return `${hours}ч ${minutes}м`;
}

export function getFilteredMovies(movies, inputValue) {
  const results = movies.filter((movie) => {
    const movieNameRu = movie.nameRU.toLowerCase();
    const movieNameEn = movie.nameEN.toLowerCase();
    return movieNameRu.includes(inputValue.toLowerCase())
      || movieNameEn.includes(inputValue.toLowerCase());
  });
  return results;
}

export function getShortsFilteredMovies(movies) {
  const resultsShorts = movies.filter((movie) => movie.duration <= SHORT_MOVIE_MAX_DURATION);
  return resultsShorts;
}
