/* eslint-disable semi */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable arrow-body-style */
import { BASE_URL, MOVIE_IMAGE_URL } from './constants';

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}

export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return checkResponse(res);
    })
};

export const login = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return checkResponse(res);
    })
}

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return checkResponse(res);
    })
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => {
      return checkResponse(res);
    })
}

export const updateUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return checkResponse(res);
    })
}

export const getAddedToSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => {
      return checkResponse(res);
    })
}

export const addMovieToSaved = (data) => {
  const {
    country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id,
  } = data
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country,
      description,
      director,
      duration,
      movieId: id,
      image: `${MOVIE_IMAGE_URL}${image.url}`,
      nameEN,
      nameRU,
      trailerLink,
      year,
      thumbnail: `${MOVIE_IMAGE_URL}${image.formats.thumbnail.url}`,
    }),
  })
    .then((res) => {
      return checkResponse(res);
    })
}

export const deleteAddedSavedMovies = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })
    .then((res) => {
      return checkResponse(res);
    })
}
