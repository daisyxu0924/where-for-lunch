import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom, formatCategories } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const params = {
      ...action.payload,
      categories: formatCategories(action.payload.categories),
    };
    const places = yield call(getPlaceIds, params);

    if (places.length) {
      const randomPlace = getRandom(places);
      yield put(placeActions.setDetails(randomPlace));
    } else {
      yield put(placeActions.clearDetails());
    }
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

export default placeSagas;
