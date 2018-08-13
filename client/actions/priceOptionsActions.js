import { createActions } from 'redux-actions';
import * as priceOptionsActionTypes from './priceOptionsActionTypes';

const actionTypes = createActions({}, ...Object.values(priceOptionsActionTypes));
export default actionTypes;
