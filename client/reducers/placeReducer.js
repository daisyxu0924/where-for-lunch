import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
  searchEnabled: true,
};

const placeReducer = handleActions(
  {
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
    [actionTypes.SET_SEARCH_BUTTON_STATUS](state, action) {
      return { ...state, ...action.payload };
    },
  },
  initialState,
);

export default placeReducer;
