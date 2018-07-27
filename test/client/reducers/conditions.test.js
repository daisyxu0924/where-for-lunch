
import reducer from '../../../client/reducers/conditionReducer';
import * as actions from '../../../client/actions/conditionActionTypes';

describe('Condition Reducer', () => {
  test('should handle SET_RADIUS', () => {
    const action = {
      type: actions.SET_RADIUS,
      payload: 5000,
    };

    expect(reducer({}, action)).toEqual({ radius: 5000 });
  });

  test('should handle SET_LAT_LNG', () => {
    const action = {
      type: actions.SET_LAT_LNG,
      payload: {
        latitude: 1.4,
        longitude: 1.5,
      },
    };

    expect(reducer({}, action)).toEqual({ latitude: 1.4, longitude: 1.5 });
  });

  test('should handle ADD_CATEGORY', () => {
    const initialState = {
      categories: [],
    };

    const action = {
      type: actions.ADD_CATEGORY,
      payload: 'test',
    };

    expect(reducer(initialState, action)).toEqual({ categories: ['test'] });
  });

  test('should handle REMOVE_CATEGORY', () => {
    const initialState = {
      categories: ['apple', 'banana', 'cantaloupe'],
    };

    const action = {
      type: actions.REMOVE_CATEGORY,
      payload: 'banana',
    };

    expect(reducer(initialState, action)).toEqual({ categories: ['apple', 'cantaloupe'] });
  });
});
