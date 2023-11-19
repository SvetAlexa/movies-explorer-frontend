/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import { login, getUserInfo } from '../../utils/MainApi';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getUserInfo()
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.error(`Произошла ошибка: ${err}`);
      });
  }, []);

  function handleBurgerMenuOpen() {
    setIsBurgerMenuOpen(true);
    document.querySelector('.page').classList.add('page_disable-scroll');
  }

  function handleBurgerMenuClose() {
    setIsBurgerMenuOpen(false);
    document.querySelector('.page').classList.remove('page_disable-scroll');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={(
              <>
                <Header
                  isLanding
                  isLoggedIn={isLoggedIn}
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
                  isLoggedIn={isLoggedIn}
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
                  isLoggedIn={isLoggedIn}
                  isBurgerMenuOpen={isBurgerMenuOpen}
                  onMenuButtonCloseClick={handleBurgerMenuClose}
                  onMenuButtonOpenClick={handleBurgerMenuOpen}
                />
                <SavedMovies />
                <Footer />
              </>
            )}
          />
          <Route path='/signup' element={<Register setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
          <Route path='/signin' element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
          <Route
            path='/profile'
            element={(
              <>
                <Header
                  isLanding={false}
                  isLoggedIn={isLoggedIn}
                  isBurgerMenuOpen={isBurgerMenuOpen}
                  onMenuButtonCloseClick={handleBurgerMenuClose}
                  onMenuButtonOpenClick={handleBurgerMenuOpen}
                />
                <Profile setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />
              </>
            )}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
