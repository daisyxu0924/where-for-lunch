import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceMoreDetails  } from 'services/placeApi';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACE_DETAILS
} from 'actions/placeActionTypes';

function* setMoreDetails(action) {
  try {
    const placeDetails = yield call(getPlaceMoreDetails, action.payload);
    yield put(placeActions.fetchPlaceDetails(placeDetails))
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeDetailsSagas() {
  yield takeEvery(FETCH_PLACE_DETAILS, setMoreDetails);
}

export default placeDetailsSagas;