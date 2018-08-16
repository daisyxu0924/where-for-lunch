import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
  prices: [],
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
    [actionTypes.SET_PRICES](state, action) {
      let newPrices = [...state.prices];

      if (state.prices.indexOf(action.payload) < 0) {
        newPrices.push(action.payload);
      } else {
        newPrices = newPrices.filter(val => val !== action.payload);
      }

      return { ...state, prices: newPrices };
    },
  },
  initialState,
);

export default conditionReducer;
