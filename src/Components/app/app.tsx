import React, { useEffect } from 'react';
import { getCatsThunk } from '../../redux/actions/app-actions';
import { useAppDispatch } from '../../services/hooks';
import CatsList from '../cats-list/cats-list';
import styles from './app.module.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCatsThunk());
  }, [dispatch]);

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
