/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import { register } from '../../utils/MainApi';
import './App.css';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isResponseRegister, setIsResponseRegister] = useState('');
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const [registerStatus, setRegisterStatus] = useState(false);

  const navigate = useNavigate();

  function handleRegister(userData) {
    console.log(userData);
    // const { name, email, password } = userData;
    register(userData)
      .then(() => {
        navigate('/signin', { replace: true });
        setIsResponseRegister('');
        setRegisterStatus(true);
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
        if (err === '409') {
          return setIsResponseRegister('Пользователь с таким email уже существует');
        }
        setRegisterStatus(false);
        return setIsResponseRegister('При регистрации пользователя произошла ошибка');
      });
  }

  function handleBurgerMenuOpen() {
    setIsBurgerMenuOpen(true);
    document.querySelector('.page').classList.add('page_disable-scroll');
  }

  function handleBurgerMenuClose() {
    setIsBurgerMenuOpen(false);
    document.querySelector('.page').classList.remove('page_disable-scroll');
  }

  return (
    <div className='page'>
      <Routes>
        <Route
          path='/'
          element={(
            <>
              <Header
                isLanding
                isLoggedIn={false}
                isBurgerMenuOpen={isBurgerMenuOpen}
                onMenuButtonCloseClick={handleBurgerMenuClose}
                onMenuButtonOpenClick={handleBurgerMenuOpen}
              />
              <Main />
              <Footer />
            </>
          )}
        />
        <Route
          path='/movies'
          element={(
            <>
              <Header
                isLanding={false}
                isLoggedIn
                isBurgerMenuOpen={isBurgerMenuOpen}
                onMenuButtonCloseClick={handleBurgerMenuClose}
                onMenuButtonOpenClick={handleBurgerMenuOpen}
              />
              <Movies />
              <Footer />
            </>
          )}
        />
        <Route
          path='/saved-movies'
          element={(
            <>
              <Header
                isLanding={false}
                isLoggedIn
                isBurgerMenuOpen={isBurgerMenuOpen}
                onMenuButtonCloseClick={handleBurgerMenuClose}
                onMenuButtonOpenClick={handleBurgerMenuOpen}
              />
              <SavedMovies />
              <Footer />
            </>
          )}
        />
        <Route path='/signup' element={<Register onRegister={handleRegister} isResponseRegister={isResponseRegister} />} />
        <Route path='/signin' element={<Login />} />
        <Route
          path='/profile'
          element={(
            <>
              <Header
                isLanding={false}
                isLoggedIn
                isBurgerMenuOpen={isBurgerMenuOpen}
                onMenuButtonCloseClick={handleBurgerMenuClose}
                onMenuButtonOpenClick={handleBurgerMenuOpen}
              />
              <Profile />
            </>
          )}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
