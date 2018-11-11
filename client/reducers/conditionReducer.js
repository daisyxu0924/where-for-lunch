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
      const { value } = action.payload;
      return { ...state, prices: [...state.prices, value] };
    },
    [actionTypes.REMOVE_PRICE](state, action) {
      const { value } = action.payload;
      return { ...state, prices: [...state.prices.filter(p => p !== value)] };
    },
    // foods
    [actionTypes.ADD_FOOD](state, action) {
      const { value } = action.payload;
      return { ...state, foods: [...state.foods, value] };
    },
    [actionTypes.REMOVE_FOOD](state, action) {
      const { value } = action.payload;
      return { ...state, foods: [...state.foods.filter(f => f !== value)] };
    },
  },
  initialState,
);

export default conditionReducer;
