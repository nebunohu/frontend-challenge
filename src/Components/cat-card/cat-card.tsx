import React, { FC } from 'react';

import styles from './cat-card.module.css';

type TCatCardProps = {
  cat: any;
}

const CatCard: FC<TCatCardProps> = ({ cat }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <img  className={`${styles.image}`} src={cat.url} alt='' />
    </div>
  );
};

export default CatCard;
