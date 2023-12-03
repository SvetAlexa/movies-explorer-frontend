const BASE_URL = 'https://api.movies-diploma.nomoredomainsrocks.ru';
// const BASE_URL = 'http://127.0.0.1:3000';
const BASE_MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MOVIE_IMAGE_URL = 'https://api.nomoreparties.co';

const EMAIL_REGEX = '^([A-z0-9_.-]{1,}@[A-z0-9_.-]{1,}[.][A-z]{2,})$';
const NAME_REGEX = '^[A-Za-zА-Яа-яЁё -]+$';

const TIMER = 2000;

const SHORT_MOVIE_MAX_DURATION = 40;
const MINUTES_PER_HOUR = 60;

const BAD_REQUEST_CODE = '400';
const UNAUTHORIZED_CODE = '401';
const CONFLICT_CODE = '409';

const INVALID_INPUT = 'Вы пропустили это поле';
const INVALID_EMAIL = 'Неправильный формат email';
const INVALID_NAME_LENGTH = 'Минимальное количество символов: 2';
const INVALID_NAME = 'Можно использовать только латиницу, кириллицу, пробел или дефис';
const INVALID_SEARCH_INPUT = 'Нужно ввести ключевое слово';
const INVALID_SEARCH_NOT_FOUND = 'Ничего не найдено';
const ERROR_CONFLICT = 'Пользователь с таким email уже существует';
const ERROR_BAD_REQUEST_SERVER = 'Переданы некорректные данные';
const ERROR_SERVER_REGISTER = 'При регистрации пользователя произошла ошибка';
const ERROR_UNAUTHORIZED_LOGIN = 'Вы ввели неправильный логин или пароль';
const ERROR_SERVER_LOGIN = 'При авторизации произошла ошибка';
const ERROR_SERVER_PROFILE = 'При обновлении профиля произошла ошибка';
const ERROR_SERVER_SEARCH = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const OK_SERVER_PROFILE = 'Данные профиля успешно изменены!';

const DEVICE_SIZE = {
  desktop: {
    width: 1280,
    quantity: 16,
    increase: 4,
  },
  bigTablet: {
    width: 990,
    quantity: 12,
    increase: 3,
  },
  tablet: {
    width: 768,
    quantity: 8,
    increase: 2,
  },
  mobile: {
    width: 767,
    quantity: 5,
    increase: 2,
  },
};

export {
  BASE_URL,
  BASE_MOVIES_URL,
  MOVIE_IMAGE_URL,
  EMAIL_REGEX,
  NAME_REGEX,
  TIMER,
  SHORT_MOVIE_MAX_DURATION,
  MINUTES_PER_HOUR,
  BAD_REQUEST_CODE,
  UNAUTHORIZED_CODE,
  CONFLICT_CODE,
  INVALID_INPUT,
  INVALID_EMAIL,
  INVALID_NAME_LENGTH,
  INVALID_NAME,
  INVALID_SEARCH_INPUT,
  INVALID_SEARCH_NOT_FOUND,
  ERROR_CONFLICT,
  ERROR_BAD_REQUEST_SERVER,
  ERROR_SERVER_REGISTER,
  ERROR_UNAUTHORIZED_LOGIN,
  ERROR_SERVER_LOGIN,
  ERROR_SERVER_PROFILE,
  ERROR_SERVER_SEARCH,
  OK_SERVER_PROFILE,
  DEVICE_SIZE,
};
