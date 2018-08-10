import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import conditionReducer from './conditionReducer';
import placeReducer from './placeReducer';
import placeDetailsReducer from './placeDetailsReducer';

export default combineReducers({
  condition: conditionReducer,
  place: placeReducer,
  placeDetails: placeDetailsReducer,
  routing: routerReducer,
});
