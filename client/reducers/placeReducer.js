import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/placeActionTypes';

const initialState = {
};
const placeReducer = handleActions(
  {
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
    [actionTypes.CLEAR_DETAILS]() {
      return initialState;
    },
  },
  initialState,
);

export default placeReducer;
