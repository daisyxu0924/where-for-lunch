import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  FETCH_DETAILS,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* fetchDetails(action) {
  try {
    const place = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.setCompleteDetails(place));
  } catch (e) {
    console.log('error! ', e);
  }
}

export default [
  takeEvery(FETCH_PLACES, fetchPlace),
  takeEvery(FETCH_DETAILS, fetchDetails),
];
