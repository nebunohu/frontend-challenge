import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { getFavouriteCatsThunk } from '../../redux/actions/app-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import CatCard from '../cat-card/cat-card';

import styles from './favourite-cats-list.module.css';

const FavouriteCatsList: FC = () => {
  const dispatch = useAppDispatch();
  const { getFavoritesCatsRequest, favourites } = useAppSelector((store) => store.app);
  const [page, setPage] = useState(0);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastCatCardElementRef = useCallback((node: any) => {
    if (getFavoritesCatsRequest) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(page + 1)
      }
    });
    if (node) observer.current.observe(node);

  }, [getFavoritesCatsRequest, page])

  useEffect(() => {
    dispatch(getFavouriteCatsThunk(page));
  }, [dispatch, page]);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.contentWrapper}`}>
        {favourites.map((cat: any, index: number) => {
          if (index === favourites.length - 1) {
            return <div key={`${cat.id}_${index}`} ref={lastCatCardElementRef}><CatCard cat={cat} /></div>
          } else {
            return <CatCard cat={cat} key={`${cat.id}_${index}`} />
          }
          
        })}
      </div>
      {getFavoritesCatsRequest && <div className={`${styles.preloader}`}>...загружаем еще котиков...</div>}
    </div>
  );
};

export default FavouriteCatsList;