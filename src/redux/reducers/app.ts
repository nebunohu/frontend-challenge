import { TAppActions, GET_CATS_REQUEST_SUCCESS, GET_CATS_REQUEST, GET_CATS_REQUEST_FAILED } from './../actions/app-actions';

type TAppState = {
  cats: Array<any>;

  getCatsRequest: boolean;
  getCatsRequestSuccess: boolean;
  getCatsRequestFailed: boolean;
};

const initialState: TAppState = {
  cats: [],
  getCatsRequest: false,
  getCatsRequestSuccess: false,
  getCatsRequestFailed: false,
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
    default: {
      return state;
    }
  };
};

export default appReducer;