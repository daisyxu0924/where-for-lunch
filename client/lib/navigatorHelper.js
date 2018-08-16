import {
  SET_LAT_LNG,
} from 'actions/conditionActionTypes';

export function fetchLatLng(store) {
  const options = {
    timeout: 5000,
  };
  navigator.geolocation.getCurrentPosition((position) => {
    store.dispatch({
      type: SET_LAT_LNG,
      payload: position.coords,
    });
  }, (err) => {
    console.error(err.message, err);
    console.info('dispatching proxy location...');

    // Dispatch proxy location
    store.dispatch({
      type: SET_LAT_LNG,
      payload: {
        latitude: 14.6823193,
        longitude: 121.0780226,
      },
    });
  },
  options);
}
