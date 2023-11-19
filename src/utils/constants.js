/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
const EMAIL_REGEX = '^([A-z0-9_.-]{1,}@[A-z0-9_.-]{1,}[.][A-z]{2,})$';
const NAME_REGEX = '^[A-Za-zА-Яа-яЁё -]+$';

// export const BASE_URL = 'https://api.movies-diploma.nomoredomainsrocks.ru';
export const BASE_URL = 'http://127.0.0.1:3000';

const BAD_REQUEST_CODE = '400';
const UNAUTHORIZED_CODE = '401';
const CONFLICT_CODE = '409';

const INVALID_INPUT = 'Вы пропустили это поле';
const INVALID_EMAIL = 'Неправильный формат email';
const INVALID_NAME_LENGTH = 'Минимальное количество символов: 2';
const INVALID_NAME = 'Можно использовать только латиницу, кириллицу, пробел или дефис';
const ERROR_CONFLICT = 'Пользователь с таким email уже существует';
const ERROR_BAD_REQUEST_SERVER = 'Переданы некорректные данные';
const ERROR_SERVER_REGISTER = 'При регистрации пользователя произошла ошибка';
const ERROR_UNAUTHORIZED_LOGIN = 'Вы ввели неправильный логин или пароль';
const ERROR_SERVER_LOGIN = 'При авторизации произошла ошибка';
const ERROR_SERVER_PROFILE = 'При обновлении профиля произошла ошибка';
const OK_SERVER_PROFILE = 'Данные профиля успешно изменены!';

export {
  EMAIL_REGEX,
  NAME_REGEX,
  BAD_REQUEST_CODE,
  UNAUTHORIZED_CODE,
  CONFLICT_CODE,
  INVALID_INPUT,
  INVALID_EMAIL,
  INVALID_NAME_LENGTH,
  INVALID_NAME,
  ERROR_CONFLICT,
  ERROR_BAD_REQUEST_SERVER,
  ERROR_SERVER_REGISTER,
  ERROR_UNAUTHORIZED_LOGIN,
  ERROR_SERVER_LOGIN,
  ERROR_SERVER_PROFILE,
  OK_SERVER_PROFILE,
};
