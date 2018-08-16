import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Details } from 'containers/Details';

describe('Search Container', () => {
  const mockFn = jest.fn();
  const defaultProps = {
    fetchDetails: mockFn,
    loading: false,
    match: {
      params: {
        placeid: '',
      },
    },
    setDetails: mockFn,
    place: {},
  };
  const detailsComponent = props =>
    <Details {...{ ...defaultProps, ...props }}/>;

  test('renders `Loading...` text if props.loading = true', () => {
    const wrapper = shallow(detailsComponent({
      loading: true,
    }));

    expect(wrapper.find('span').first().text()).toBe('Loading...');
    expect(wrapper.find('PlaceDetails').length).toEqual(0);
  });

  test('renders `PlaceDetails` if props.loading = false', () => {
    const wrapper = shallow(detailsComponent());

    expect(wrapper.find('span').length).toEqual(0);
    expect(wrapper.find('PlaceDetails').length).toEqual(1);
  });

  test('renders properly', () => {
    const wrapper = renderer
      .create(detailsComponent())
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
