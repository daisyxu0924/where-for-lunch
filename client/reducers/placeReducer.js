import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
  loading: false,
};
const placeReducer = handleActions(
  {
    [actionTypes.FETCH_DETAILS](state) {
      return { ...state, loading: true };
    },
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
    [actionTypes.SET_COMPLETE_DETAILS](state, action) {
      return { ...state, details: action.payload, loading: false };
    },
  },
  initialState,
);

export default placeReducer;
