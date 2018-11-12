import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
  latitude: null,
  longitude: null,
  foods: [],
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
    [actionTypes.CHANGE_FOOD](state, action) {
      const { key, value } = action.payload;
      if (value) return { ...state, foods: [...state.foods, key] };
      return { ...state, foods: [...state.foods.filter(f => f !== key)] };
    },
  },
  initialState,
);

export default conditionReducer;
