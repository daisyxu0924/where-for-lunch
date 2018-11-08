import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
  latitude: null,
  longitude: null,
  prices: [], // selected prices in checkbox
  foods: [], // selected foods in checkbox
};
const conditionReducer = handleActions(
  {
    // location
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, latitude, longitude };
    },
    // prices
    [actionTypes.ADD_PRICE](state, action) {
      const { price } = action.payload;
      return { ...state, prices: [...state.prices, price] };
    },
    [actionTypes.REMOVE_PRICE](state, action) {
      const { price } = action.payload;
      return { ...state, prices: [...state.prices.filter(p => p !== price)] };
    },
    // foods
    [actionTypes.ADD_FOOD](state, action) {
      const { food } = action.payload;
      return { ...state, foods: [...state.foods, food] };
    },
    [actionTypes.REMOVE_FOOD](state, action) {
      const { food } = action.payload;
      return { ...state, foods: [...state.foods.filter(f => f !== food)] };
    },
  },
  initialState,
);

export default conditionReducer;
