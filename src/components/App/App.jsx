import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='page'>
      <Routes>
        <Route
          path='/'
          element={(
            <>
              <Header isLanding loggedIn />
              <Main />
              <Footer />
            </>
          )}
        />
        <Route
          path='/movies'
          element={(
            <>
              <Header isLanding={false} loggedIn />
              <Movies />
              <Footer />
            </>
          )}
        />
        <Route
          path='/saved-movies'
          element={(
            <>
              <Header isLanding={false} loggedIn />
              <Movies />
              <Footer />
            </>
          )}
        />
        <Route path='*' element={<PageNotFound />} />
        <Route
          path='/profile'
          element={(
            <>
              <Header isLanding={false} loggedIn />
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
