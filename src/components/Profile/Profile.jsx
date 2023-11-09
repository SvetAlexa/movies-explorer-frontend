import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <main className='main'>
      <section className='profile'>
        <p className='profile__title'>Привет, Виталий!</p>
        <form className='profile__form'>
          <ul className='profile__form-list'>
            <li className='profile__form-item'>
              <p className='profile__form-label'>Имя</p>
              <input className='profile__form-input' type='text' name='name' placeholder='Имя' minLength={2} maxLength={30} required />
            </li>
            <li className='profile__form-item'>
              <p className='profile__form-label'>E-mail</p>
              <input className='profile__form-input' type='email' name='email' placeholder='E-mail' required />
            </li>
          </ul>
          <button className='profile__form-button' type='submit'>Редактировать</button>
        </form>
        <button className='profile__exit-button' type='button'>Выйти из аккаунта</button>
      </section>
    </main>
  );
}
