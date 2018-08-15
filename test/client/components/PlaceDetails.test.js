import React from 'react';
import PlaceDetails from 'client/components/PlaceDetails/PlaceDetails';
import renderer from 'react-test-renderer';

describe('PlaceDetails Component', () => {
  const props = {
    place: {
      rating: 2,
    },
    photos: [
      'http://via.placeholder.com/350x150',
    ],
  };

  test('renders properly', () => {
    const placeComponent = renderer
      .create(<PlaceDetails {...props} />)
      .toJSON();
    expect(placeComponent).toMatchSnapshot();
  });
});
