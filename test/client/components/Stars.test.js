import React from 'react';
import Stars from 'client/components/Stars/Stars';
import renderer from 'react-test-renderer';

describe('Stars Component', () => {
  test('renders properly', () => {
    const placeComponent = renderer
      .create(<Stars rating={4} />)
      .toJSON();
    expect(placeComponent).toMatchSnapshot();
  });
});
