import React from 'react';
import CatsList from '../cats-list/cats-list';
import styles from './app.module.css';

function App() {

  return (
    <div className={`${styles.wrapper}`}>
      <header>
        <nav>

        </nav>
      </header>
      <CatsList />
    </div>
  );
}

export default App;
