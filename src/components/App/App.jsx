/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
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
import {
  getUserInfo, getAddedToSavedMovies, addMovieToSaved, deleteAddedSavedMovies,
} from '../../utils/MainApi';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {
  const [isAppUnready, setIsAppUnready] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const { pathname } = useLocation();

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
      })
      .finally(() => {
        setIsAppUnready(false);
      });
  }, []);

  useEffect(() => {
    getAddedToSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      });
  }, [isLoggedIn]);

  function handleSaveMovie(movie) {
    addMovieToSaved(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
      });
  }

  function handleDeleteSavedMovie(movie) {
    deleteAddedSavedMovies(pathname === '/movies' ? movie : movie._id)
      .then((deletedMovieId) => {
        setSavedMovies((state) => state.filter((item) => item._id !== deletedMovieId._id));
      })
      .catch((err) => {
        console.error(`Произошла ошибка: ${err}`);
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
      {isAppUnready
        ? <Preloader />
        : (
          <CurrentUserContext.Provider value={currentUser}>
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
                  <ProtectedRoute
                    element={(
                      <>
                        <Header
                          isLanding={false}
                          isLoggedIn={isLoggedIn}
                          isBurgerMenuOpen={isBurgerMenuOpen}
                          onMenuButtonCloseClick={handleBurgerMenuClose}
                          onMenuButtonOpenClick={handleBurgerMenuOpen}
                        />
                        <Movies
                          savedMovies={savedMovies}
                          onSaveMovie={handleSaveMovie}
                          onDelete={handleDeleteSavedMovie}
                        />
                        <Footer />
                      </>
                    )}
                    isLoggedIn={isLoggedIn}
                  />
                )}
              />
              <Route
                path='/saved-movies'
                element={(
                  <ProtectedRoute
                    element={(
                      <>
                        <Header
                          isLanding={false}
                          isLoggedIn={isLoggedIn}
                          isBurgerMenuOpen={isBurgerMenuOpen}
                          onMenuButtonCloseClick={handleBurgerMenuClose}
                          onMenuButtonOpenClick={handleBurgerMenuOpen}
                        />
                        <SavedMovies
                          savedMovies={savedMovies}
                          onDelete={handleDeleteSavedMovie}
                          setSavedMovies={setSavedMovies}
                        />
                        <Footer />
                      </>
                    )}
                    isLoggedIn={isLoggedIn}
                  />
                )}
              />
              <Route path='/signup' element={!isLoggedIn ? (<Register setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />) : <Navigate to='/movies' />} />
              <Route path='/signin' element={!isLoggedIn ? (<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />) : <Navigate to='/movies' />} />
              <Route
                path='/profile'
                element={(
                  <ProtectedRoute
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
                    isLoggedIn={isLoggedIn}
                  />
                )}
              />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </CurrentUserContext.Provider>
        )}
    </div>
  );
}

export default App;
