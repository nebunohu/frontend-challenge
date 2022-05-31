import { API_BASE_URL, API_KEY } from './../../consts/index';
import { AppDispatch } from "../../services/store";
import getRequest from "../../utils/getRequest";

export const GET_CATS_REQUEST: 'GET_CATS_REQUEST' = 'GET_CATS_REQUEST';
export const GET_CATS_REQUEST_SUCCESS: 'GET_CATS_REQUEST_SUCCESS' = 'GET_CATS_REQUEST_SUCCESS';
export const GET_CATS_REQUEST_FAILED: 'GET_CATS_REQUEST_FAILED' = 'GET_CATS_REQUEST_FAILED';
export const GET_FAVOURITE_CATS_REQUEST: 'GET_FAVOURITE_CATS_REQUEST' = 'GET_FAVOURITE_CATS_REQUEST';
export const GET_FAVOURITE_CATS_REQUEST_SUCCESS: 'GET_FAVOURITE_CATS_REQUEST_SUCCESS' = 'GET_FAVOURITE_CATS_REQUEST_SUCCESS';
export const GET_FAVOURITE_CATS_REQUEST_FAILED: 'GET_FAVOURITE_CATS_REQUEST_FAILED' = 'GET_FAVOURITE_CATS_REQUEST_FAILED';
export const CLEAR_CATS_LIST: 'CLEAR_CATS_LIST' = 'CLEAR_CATS_LIST';

type TGetCatsRequest = {
  type: typeof GET_CATS_REQUEST; 
};

type TGetCatsRequestSuccess = {
  type: typeof GET_CATS_REQUEST_SUCCESS;
  cats: Array<any>;
};

type TGetCatsRequestFailed = {
  type: typeof GET_CATS_REQUEST_FAILED; 
};

type TGetFavouriteCatsRequest = {
  type: typeof GET_FAVOURITE_CATS_REQUEST; 
};

type TGetFavouriteCatsRequestSuccess = {
  type: typeof GET_FAVOURITE_CATS_REQUEST_SUCCESS;
  favourites: Array<any>;
};

type TGetFavouriteCatsRequestFailed = {
  type: typeof GET_FAVOURITE_CATS_REQUEST_FAILED; 
};

type TClearCatsList = {
  type: typeof CLEAR_CATS_LIST; 
};

export type TAppActions = TGetCatsRequest |
TGetCatsRequestFailed |
TGetCatsRequestSuccess |
TGetFavouriteCatsRequest |
TGetFavouriteCatsRequestSuccess |
TGetFavouriteCatsRequestFailed |
TClearCatsList;

export const getCatsRequest = (): TGetCatsRequest => {
  return {
    type: GET_CATS_REQUEST,
  };
};

export const getCatsRequestSuccess = (cats: Array<any>): TGetCatsRequestSuccess => {
  return {
    type: GET_CATS_REQUEST_SUCCESS,
    cats,
  };
};

export const getCatsRequestFailed = (): TGetCatsRequestFailed => {
  return {
    type: GET_CATS_REQUEST_FAILED,
  };
};

export const getFavouriteCatsRequest = (): TGetFavouriteCatsRequest => {
  return {
    type: GET_FAVOURITE_CATS_REQUEST,
  };
};

export const getFavouriteCatsRequestSuccess = (favourites: Array<any>): TGetFavouriteCatsRequestSuccess => {
  return {
    type: GET_FAVOURITE_CATS_REQUEST_SUCCESS,
    favourites,
  };
};

export const getFavouriteCatsRequestFailed = (): TGetFavouriteCatsRequestFailed => {
  return {
    type: GET_FAVOURITE_CATS_REQUEST_FAILED,
  };
};

export const clearCatsList = (): TClearCatsList => {
  return {
    type: CLEAR_CATS_LIST,
  };
};

export const getCatsThunk = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(getCatsRequest());
  try {
    const cats = await getRequest(`${API_BASE_URL}/images/search/?limit=20&page=${page}`, { 'x-api-key': API_KEY });
    dispatch(getCatsRequestSuccess(cats));
  } catch (e) {
    dispatch(getCatsRequestFailed());
  }
};

export const getFavouriteCatsThunk = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(getFavouriteCatsRequest());
  try {
    const favourites = await getRequest(
      `${API_BASE_URL}/favourites/?limit=20&page=${page}&sub_id=nebunohu`,
      {
        'x-api-key': API_KEY
      }
    );
    dispatch(getFavouriteCatsRequestSuccess(favourites));
  } catch (e) {
    console.log(e);
    dispatch(getFavouriteCatsRequestFailed());
  }
};