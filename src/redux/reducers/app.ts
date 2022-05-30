import { TAppActions, GET_CATS_REQUEST_SUCCESS } from './../actions/app-actions';

type TAppState = {
  cats: Array<any>;
};

const initialState: TAppState = {
  cats: [],
};

const appReducer = (state = initialState, action: TAppActions) => {
  switch (action.type) {
    case GET_CATS_REQUEST_SUCCESS: {
      return {
        ...state,
        cats: action.cats,
      }
    }
    default: {
      return state;
    }
  };
};

export default appReducer;