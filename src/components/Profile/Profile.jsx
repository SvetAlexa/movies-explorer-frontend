import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <main className='main'>
      <section className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <ul className='profile__form-list'>
            <li className='profile__form-item'>
              <label className='profile__form-label' htmlFor='name'>Имя</label>
              <input className='profile__form-input' type='text' name='name' id='name' placeholder='Имя' minLength={2} maxLength={30} required />
            </li>
            <li className='profile__form-item'>
              <label className='profile__form-label' htmlFor='email'>E-mail</label>
              <input className='profile__form-input' type='email' name='email' id='email' placeholder='E-mail' required />
            </li>
          </ul>
          <button className='profile__form-button' type='submit'>Редактировать</button>
        </form>
        <button className='profile__exit-button' type='button'>Выйти из аккаунта</button>
      </section>
    </main>
  );
}
