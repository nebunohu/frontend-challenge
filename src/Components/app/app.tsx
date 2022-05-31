import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CatsList from '../cats-list/cats-list';
import FavouriteCatsList from '../favourite-cats-list/favourite-cats-list';
import styles from './app.module.css';

function App() {
  const { pathname } = useLocation();
  const isFavourites = !!pathname.match(/favourites/);
  return (
    <div className={`${styles.wrapper}`}>
      <header>
        <nav>
          <Link 
            className={`${styles.navLink} ${!isFavourites && styles.active}`}
            to='/'
          >
            Все котики
          </Link>
          
          <Link
            className={`${styles.navLink} ${isFavourites && styles.active}`}
            to='/favourites'
          >
            Любимые котики
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<CatsList />} />
        <Route path='/favourites' element={<FavouriteCatsList />} />
      </Routes>
    </div>
  );
}

export default App;
