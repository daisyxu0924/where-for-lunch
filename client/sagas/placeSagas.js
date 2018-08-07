import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import { FETCH_PLACES } from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    yield put({
      type: 'setSearchButtonStatus',
      payload: { searchEnabled: false },
    });

    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);

    yield put({
      type: 'setSearchButtonStatus',
      payload: { searchEnabled: true },
    });

    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    yield put({
      type: 'setSearchButtonStatus',
      payload: { searchEnabled: false },
    });
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

export default placeSagas;
