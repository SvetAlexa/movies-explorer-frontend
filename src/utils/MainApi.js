/* eslint-disable semi */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable arrow-body-style */
export const BASE_URL = 'https://api.movies-diploma.nomoredomainsrocks.ru';

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
