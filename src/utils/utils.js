import { deviceSize } from './constants';

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

export function getMoviesDisplayQuantity(setQuantity) {
  const displaySize = window.innerWidth;
  if (displaySize >= deviceSize.desktop.width) {
    setQuantity(deviceSize.desktop.quantity);
  }
  if (displaySize >= deviceSize.bigTablet.width) {
    setQuantity(deviceSize.bigTablet.quantity);
  }
  if (displaySize >= deviceSize.tablet.width) {
    setQuantity(deviceSize.tablet.quantity);
  }
  if (displaySize <= deviceSize.mobile.width) {
    setQuantity(deviceSize.mobile.quantity);
  }
}

export function getMoreMoviesQuantity(setQuantity, quantity) {
  const displaySize = window.innerWidth;
  if (displaySize >= deviceSize.desktop.width) {
    setQuantity(quantity + deviceSize.desktop.increase);
  }
  if (displaySize >= deviceSize.bigTablet.width) {
    setQuantity(quantity + deviceSize.bigTablet.increase);
  }
  if (displaySize >= deviceSize.tablet.width) {
    setQuantity(quantity + deviceSize.tablet.increase);
  }
  if (displaySize <= deviceSize.mobile.width) {
    setQuantity(quantity + deviceSize.mobile.increase);
  }
}
