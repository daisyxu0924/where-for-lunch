import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
  // id: '8QYaPXIbIB2Ko1lh5kM1eQ',
  id: null,
  error: '',
};
const placeReducer = handleActions(
  {
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, error: null, ...action.payload };
    },
    [actionTypes.SET_ERROR](state, action) {
      return { ...state, error: action.payload };
    },
  },
  initialState,
);

export default placeReducer;
