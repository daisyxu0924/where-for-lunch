import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES, FETCH_PLACEDETAILS,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    yield put(placeActions.setError('No result found!'));
  }
}

function* fetchPlaceDetails(action) {
  try {
    const places = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.setDetails(places));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeEvery(FETCH_PLACEDETAILS, fetchPlaceDetails);
}

export default placeSagas;
