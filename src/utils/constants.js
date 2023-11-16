/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
const EMAIL_REGEX = "^[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
const NAME_REGEX = '^[A-Za-zА-Яа-яЁё -]+$';

const INVALID_INPUT = 'Вы пропустили это поле';
const INVALID_EMAIL = 'Не правильный формат email';
const INVALID_NAME_LENGTH = 'Минимальное количество символов: 2';
const INVALID_NAME = 'Можно использовать только латиницу, кириллицы, пробел или дефис';

export {
  EMAIL_REGEX,
  NAME_REGEX,
  INVALID_INPUT,
  INVALID_EMAIL,
  INVALID_NAME_LENGTH,
  INVALID_NAME,
};
