import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    yield put(placeActions.setLoading(true));
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    yield put(placeActions.setError('No found Result!'));
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

export default placeSagas;
