import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import conditionReducer from './conditionReducer';
import placeReducer from './placeReducer';
import priceOptionsReducer from './priceOptionsReducer';

export default combineReducers({
  condition: conditionReducer,
  place: placeReducer,
  priceOptions: priceOptionsReducer,
  routing: routerReducer,
});
