import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

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
        <Route path='/signup' element={<Register />} />
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
