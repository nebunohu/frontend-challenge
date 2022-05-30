import React, { FC } from 'react';
import { useAppSelector } from '../../services/hooks';
import CatCard from '../cat-card/cat-card';

import styles from './cats-list.module.css';

const CatsList: FC = () => {
  const { cats } = useAppSelector((store) => store.app);
  return (
    <div className={`${styles.wrapper}`}>
        {cats.map((cat: any) => <CatCard cat={cat} key={cat.id}/>)}
    </div>
  );
};

export default CatsList;