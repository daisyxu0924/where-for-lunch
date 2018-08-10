import {
  SET_LAT_LNG,
} from 'actions/conditionActionTypes';

export function fetchLatLng(store) {
  navigator.geolocation.getCurrentPosition((position) => {
    store.dispatch({
      type: SET_LAT_LNG,
      payload: position.coords,
    });
  }, (err) => {
    console.log('gives it to me! ', err);
  });
}
