import React from 'react';
import { shallow } from 'enzyme';
import PlaceDetails from 'client/components/PlaceDetails/PlaceDetails';
import renderer from 'react-test-renderer';

describe('PlaceDetails Component', () => {
  const props = {
    place: {
      rating: 5,
    },
  };

  test('renders Stars Component', () => {
    const wrapper = shallow(<PlaceDetails {...props} />);
    expect(wrapper.find('Stars').length).toBe(1);
  });

  test('renders properly', () => {
    const placeComponent = renderer
      .create(<PlaceDetails {...props} />)
      .toJSON();
    expect(placeComponent).toMatchSnapshot();
  });
});
