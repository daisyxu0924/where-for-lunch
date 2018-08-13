import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/priceOptionsActionTypes';

const initialState = {
  selected: [],
};
const priceOptionsReducer = handleActions(
  {
    [actionTypes.SET_PRICES](state, action) {
      let newSelected = [...state.selected];

      if (state.selected.indexOf(action.payload) < 0) {
        newSelected.push(action.payload);
      } else {
        newSelected = newSelected.filter(val => val !== action.payload);
      }

      return { ...state, selected: newSelected };
    },
  },
  initialState,
);

export default priceOptionsReducer;
