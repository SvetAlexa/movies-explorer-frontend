import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
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
              <main>
                <SearchForm />
              </main>
              <Footer />
            </>
          )}
        />
        <Route
          path='/saved-movies'
          element={(
            <>
              <Header isLanding={false} loggedIn />
              <main>
                <SearchForm />
              </main>
              <Footer />
            </>
          )}
        />
        <Route path='*' element={<PageNotFound />} />
        <Route
          path='/profile'
          element={(
            <Header isLanding={false} loggedIn />
          )}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
