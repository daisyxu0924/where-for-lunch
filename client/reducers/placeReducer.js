import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
};
const placeReducer = handleActions(
  {
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
    [actionTypes.SET_COMPLETE_DETAILS](state, action) {
      return { ...state, details: action.payload };
    },
  },
  initialState,
);

export default placeReducer;
