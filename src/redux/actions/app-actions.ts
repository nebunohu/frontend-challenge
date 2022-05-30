import { API_BASE_URL, API_KEY } from './../../consts/index';
import { AppDispatch } from "../../services/store";
import getRequest from "../../utils/getRequest";

export const GET_CATS_REQUEST: 'GET_CATS_REQUEST' = 'GET_CATS_REQUEST';
export const GET_CATS_REQUEST_SUCCESS: 'GET_CATS_REQUEST_SUCCESS' = 'GET_CATS_REQUEST_SUCCESS';
export const GET_CATS_REQUEST_FAILED: 'GET_CATS_REQUEST_FAILED' = 'GET_CATS_REQUEST_FAILED';

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

export type TAppActions = TGetCatsRequest |
TGetCatsRequestFailed |
TGetCatsRequestSuccess;

export const getUsersRequest = (): TGetCatsRequest => {
  return {
    type: GET_CATS_REQUEST,
  };
};

export const getUsersRequestSuccess = (cats: Array<any>): TGetCatsRequestSuccess => {
  return {
    type: GET_CATS_REQUEST_SUCCESS,
    cats,
  };
};

export const getUsersRequestFailed = (): TGetCatsRequestFailed => {
  return {
    type: GET_CATS_REQUEST_FAILED,
  };
};

export const getCatsThunk = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(getUsersRequest());
  try {
    const cats = await getRequest(`${API_BASE_URL}?limit=20&page=${page}`, {'x-api-key': API_KEY});
    dispatch(getUsersRequestSuccess(cats));
  } catch (e) {
    dispatch(getUsersRequestFailed());
  }
};