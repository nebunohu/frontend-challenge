import React, { FC, useEffect, useRef } from 'react';

import styles from './cat-card.module.css';

import like from '../../images/like.svg';
import { API_KEY } from '../../consts';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { getFavouriteCatsThunk } from '../../redux/actions/app-actions';

type TCatCardProps = {
  cat: any;
}

const CatCard: FC<TCatCardProps> = ({ cat }) => {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector((store) => store.app);
  // const likeRef = useRef<HTMLImageElement>(null);
  // const { pathname } = useLocation();
  // const isFavourites = pathname.match(/favourites/);

  let likeStyles = styles.like;

  if (favourites.find((favCat) => favCat.image.id === (cat.image?.id || cat.id))) {
    likeStyles += ' ' + styles.clicked;
  }

  const postFavourite = async (element: HTMLImageElement) => {
    try {
      await fetch(
        'https://api.thecatapi.com/v1/favourites',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-api-key': API_KEY,
          },
          body: JSON.stringify({
            image_id: cat.id,
            sub_id: 'nebunohu',
          }),
        }
      );
      // const body = await res.json();
      element.classList.add(styles.clicked);
      dispatch(getFavouriteCatsThunk());
    } catch (error) {

    }
  }

  const deleteFavourite = async (favouriteId: string, element: HTMLImageElement) => {
    try {
      await fetch(
        `https://api.thecatapi.com/v1/favourites/${favouriteId}`,
        {
          method: 'DELETE',
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );
      // const body = await res.json();
      element.classList.remove(styles.clicked);
      dispatch(getFavouriteCatsThunk());
    } catch (error) {
      console.log(error);
    }
  }

  const onLikeClickHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    if (e.currentTarget.classList.contains(styles.clicked)) {
      const favId = favourites.find((favCat) => favCat.image.id === (cat.image?.id || cat.id)).id;
      if (favId) deleteFavourite(favId, e.currentTarget);
    } else {
      postFavourite(e.currentTarget);
    }

    
  };

  return (
    <div className={`${styles.wrapper}`}>
      <img  className={`${styles.image}`} src={cat.image?.url || cat.url} alt='' />
      <img 
        className={likeStyles}
        src={like}
        alt=''
        onClick={onLikeClickHandler}
      />
    </div>
  );
};

export default CatCard;
