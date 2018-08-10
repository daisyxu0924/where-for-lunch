import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
};
const placeReducer = handleActions(
  {
    [actionTypes.FETCH_PLACE_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
  },
  initialState,
);

export default placeReducer;
