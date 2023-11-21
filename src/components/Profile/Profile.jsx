/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect, useContext, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidator from '../../hooks/useFormValidator';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import { logout, updateUserInfo } from '../../utils/MainApi';
import {
  BAD_REQUEST_CODE,
  CONFLICT_CODE,
  ERROR_CONFLICT,
  ERROR_SERVER_PROFILE,
  ERROR_BAD_REQUEST_SERVER,
  OK_SERVER_PROFILE,
  TIMER,
} from '../../utils/constants';
import './Profile.css';

export default function Profile({ setIsLoggedIn, setCurrentUser }) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const {
    formProfileValidityStatus,
    emailValue,
    nameValue,
    setEmailValue,
    setNameValue,
    errors,
    handleEmailInputChange,
    handleNameInputChange,
  } = useFormValidator();

  // возможность редактирования инпутов формы
  const [isDisabledInputs, setIsDisabledInputs] = useState(true);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false);

  const [isResponseRegister, setIsResponseRegister] = useState('');
  const [isSending, setIsSending] = useState(false);

  function handleEdit(evt) {
    evt.preventDefault();
    setIsDisabledInputs(false);
    setIsEditMode(true);
    setIsSubmitButtonDisable(false);
  }

  useEffect(() => {
    setEmailValue(currentUser.email);
    setNameValue(currentUser.name);
  }, [currentUser, setEmailValue, setNameValue]);

  useEffect(() => {
    document.querySelector('.profile__form-input').focus();
  }, [isDisabledInputs]);

  useEffect(() => {
    setIsSubmitButtonDisable(formProfileValidityStatus
      && (nameValue !== currentUser.name || emailValue !== currentUser.email));
  }, [nameValue, emailValue]);

  function handleLogout(evt) {
    evt.preventDefault();
    logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        navigate('/', { replace: true });
      });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsDisabledInputs(true);
    setIsSending(true);
    updateUserInfo({ name: nameValue, email: emailValue })
      .then((res) => {
        setCurrentUser(res);
        setIsResponseRegister(OK_SERVER_PROFILE);
        setTimeout(() => {
          setIsResponseRegister('');
        }, TIMER);
        setIsEditMode(false);
      })
      .catch((err) => {
        setIsDisabledInputs(false);
        setIsSubmitButtonDisable(false);
        console.error(`Произошла ошибка: ${err}`);
        if (err === CONFLICT_CODE) {
          return setIsResponseRegister(ERROR_CONFLICT);
        }
        if (err === BAD_REQUEST_CODE) {
          return setIsResponseRegister(ERROR_BAD_REQUEST_SERVER);
        }
        return setIsResponseRegister(ERROR_SERVER_PROFILE);
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <main className='main'>
      <section className='profile'>
        <h1 className='profile__title'>
          Привет,
          {' '}
          {currentUser.name}
          !
        </h1>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
          <ul className='profile__form-list'>
            <AuthFormInput
              labelText='Имя'
              type='text'
              classNameList='profile__form-item'
              classNameLabel='profile__form-label'
              classNameInput='profile__form-input'
              classNameError='profile__form-error'
              name='name'
              placeholder='Имя'
              value={nameValue ?? ''}
              minLength={2}
              maxLength={30}
              isDisabled={isDisabledInputs}
              onChange={handleNameInputChange}
              errorText={errors.name}
            />
            <AuthFormInput
              labelText='E-mail'
              type='email'
              classNameList='profile__form-item'
              classNameLabel='profile__form-label'
              classNameInput='profile__form-input'
              classNameError='profile__form-error'
              name='email'
              placeholder='E-mail'
              value={emailValue ?? ''}
              isDisabled={isDisabledInputs}
              onChange={handleEmailInputChange}
              errorText={errors.email}
            />
          </ul>
          {isEditMode
            && (
              <>
                <span className='profile__status-error'>{isResponseRegister}</span>
                <button
                  className={`profile__form-button ${!isSubmitButtonDisable ? 'profile__form-button_is_valid' : ''}`}
                  type='submit'
                  disabled={!isSubmitButtonDisable}
                >
                  {`${!isSending ? 'Сохранить' : 'Сохранение...'}`}
                </button>
              </>
            )}
        </form>
        {
          !isEditMode
          && (
            <>
              <span className='profile__status-ok'>{isResponseRegister}</span>
              <button className='profile__edit-button' type='submit' onClick={handleEdit}>Редактировать</button>
              <button className='profile__exit-button' type='button' onClick={handleLogout}>Выйти из аккаунта</button>
            </>
          )
        }
      </section>
    </main>
  );
}
