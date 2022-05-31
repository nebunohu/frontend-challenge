import { TAppActions, GET_CATS_REQUEST_SUCCESS, GET_CATS_REQUEST, GET_CATS_REQUEST_FAILED, GET_FAVOURITE_CATS_REQUEST, GET_FAVOURITE_CATS_REQUEST_SUCCESS, GET_FAVOURITE_CATS_REQUEST_FAILED } from './../actions/app-actions';

type TAppState = {
  cats: Array<any>;
  favourites: Array<any>;

  getCatsRequest: boolean;
  getCatsRequestSuccess: boolean;
  getCatsRequestFailed: boolean;

  getFavoritesCatsRequest: boolean;
  getFavoritesCatsRequestSuccess: boolean;
  getFavoritesCatsRequestFailed: boolean;
};

const initialState: TAppState = {
  cats: [],
  favourites: [],

  getCatsRequest: false,
  getCatsRequestSuccess: false,
  getCatsRequestFailed: false,

  getFavoritesCatsRequest: false,
  getFavoritesCatsRequestSuccess: false,
  getFavoritesCatsRequestFailed: false,
};

const appReducer = (state = initialState, action: TAppActions) => {
  switch (action.type) {
    case GET_CATS_REQUEST: {
      return {
        ...state,
        
        getCatsRequest: true,
        getCatsRequestSuccess: false,
        getCatsRequestFailed: false,
      }
    }
    case GET_CATS_REQUEST_SUCCESS: {
      return {
        ...state,
        cats: [...state.cats, ...action.cats],

        getCatsRequest: false,
        getCatsRequestSuccess: true,
      }
    }
    case GET_CATS_REQUEST_FAILED: {
      return {
        ...state,
        
        getCatsRequest: false,
        getCatsRequestFailed: true,
      }
    }
    case GET_FAVOURITE_CATS_REQUEST: {
      return {
        ...state,
        
        getFavoriteCatsRequest: true,
        getFavoriteCatsRequestSuccess: false,
        getFavoriteCatsRequestFailed: false,
      }
    }
    case GET_FAVOURITE_CATS_REQUEST_SUCCESS: {
      return {
        ...state,
        favourites: [...action.favourites],

        getFavoriteCatsRequest: false,
        getFavoriteCatsRequestSuccess: true,
      }
    }
    case GET_FAVOURITE_CATS_REQUEST_FAILED: {
      return {
        ...state,
        
        getFavoriteCatsRequest: false,
        getFavoriteCatsRequestFailed: true,
      }
    }
    default: {
      return state;
    }
  };
};

export default appReducer;