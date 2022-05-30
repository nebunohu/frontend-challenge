import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { getCatsThunk } from '../../redux/actions/app-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import CatCard from '../cat-card/cat-card';

import styles from './cats-list.module.css';

const CatsList: FC = () => {
  const dispatch = useAppDispatch();
  const { cats, getCatsRequest } = useAppSelector((store) => store.app);
  const [page, setPage] = useState(0);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastCatCardElementRef = useCallback((node: any) => {
    if (getCatsRequest) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(page + 1)
      }
    });
    if (node) observer.current.observe(node);

  }, [getCatsRequest, page])

  useEffect(() => {
    dispatch(getCatsThunk(page));
  }, [dispatch, page]);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.contentWrapper}`}>
        {cats.map((cat: any, index: number) => {
          if (index === cats.length - 1) {
            return <div key={cat.id + Math.random()} ref={lastCatCardElementRef}><CatCard cat={cat}  /></div>
          } else {
            return <CatCard cat={cat} key={cat.id + Math.random()} />
          }
          
        })}
      </div>
      {getCatsRequest && <div className={`${styles.preloader}`}>...загружаем еще котиков...</div>}
    </div>
  );
};

export default CatsList;