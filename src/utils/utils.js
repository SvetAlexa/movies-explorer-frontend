export function getHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

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
