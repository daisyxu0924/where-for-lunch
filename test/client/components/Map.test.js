import React from 'react';
import { shallow } from 'enzyme';
import Map from 'client/components/Map/Map';
import renderer from 'react-test-renderer';

describe('Map Component', () => {
  const props = {
    coordinates: {
      latitude: 14.6823193,
      longitude: 121.0780226,
    },
  };

  test('renders hidden map when state.showMap = false', () => {
    const wrapper = shallow(
      <Map {...props} />,
    );

    wrapper.setState({ showMap: false });

    expect(wrapper.find('#map').prop('hidden')).toBe(true);
  });

  test('renders map when state.showMap = true', () => {
    const wrapper = shallow(
      <Map {...props} />,
    );

    wrapper.setState({ showMap: true });

    expect(wrapper.find('#map').prop('hidden')).toBe(false);
  });

  test('renders properly', () => {
    const mapComponent = renderer
      .create(<Map {...props} />)
      .toJSON();
    expect(mapComponent).toMatchSnapshot();
  });
});
