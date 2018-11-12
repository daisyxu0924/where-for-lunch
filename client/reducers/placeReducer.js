import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
  id: null,
  loading: false,
  error: '',
};
const placeReducer = handleActions(
  {
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, loading: false, error: null, ...action.payload };
    },
    [actionTypes.SET_ERROR](state, action) {
      return { ...state, loading: false, error: action.payload };
    },
    [actionTypes.SET_LOADING](state, action) {
      return { ...state, loading: action.payload };
    },
  },
  initialState,
);

export default placeReducer;
