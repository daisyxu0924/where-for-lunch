
import reducer from '../../../client/reducers/placeReducer';
import * as actions from '../../../client/actions/placeActionTypes';

describe('Place Reducer', () => {
  const samplePlace = {
    address: 'Upper Ground Floor, The Annex, SM City North Edsa, Quezon City, 1101 Metro Manila, Philippines',
    categories: ['Taiwanese'],
    distance: 3580.8988142997873,
    id: '_xxbPiNjJ3p07xk8Qd8OOQ',
    img: 'https://s3-media4.fl.yelpcdn.com/bphoto/mBNdEvtrOgmf76LM4-WGlg/o.jpg',
    name: 'Ersao',
    phone: '+6324008294',
    rating: 4,
    reviewCount: 3,
  };

  test('should handle SET_DETAILS', () => {
    const action = {
      type: actions.SET_DETAILS,
      payload: samplePlace,
    };

    expect(reducer({}, action)).toEqual(samplePlace);
  });

  test('should handle CLEAR_DETAILS', () => {
    const action = {
      type: actions.CLEAR_DETAILS,
    };

    expect(reducer(samplePlace, action)).toEqual({});
  });
});
