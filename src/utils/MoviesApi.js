/* eslint-disable prefer-promise-reject-errors */
import { BASE_MOVIES_URL } from './constants';

export default function getMovies() {
  return fetch(`${BASE_MOVIES_URL}`, {
    method: 'GET',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`${res.status}`);
    });
}
