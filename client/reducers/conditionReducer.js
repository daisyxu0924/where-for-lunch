import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/conditionActionTypes';

const initialState = {
  radius: 5000,
  categories: [],
};
const conditionReducer = handleActions(
  {
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, latitude, longitude };
    },
    [actionTypes.ADD_CATEGORY](state, action) {
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    },
    [actionTypes.REMOVE_CATEGORY](state, action) {
      return {
        ...state,
        categories: state.categories.filter(i => i !== action.payload),
      };
    },
  },
  initialState,
);

export default conditionReducer;
