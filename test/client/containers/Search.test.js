import React from 'react';
import renderer from 'react-test-renderer';
import { Search } from 'containers/Search';

describe('Search Container', () => {
  const mockFn = jest.fn();
  const defaultProps = {
    condition: {},
    setRadius: mockFn,
    fetchPlaces: mockFn,
  };
  const searchComponent = props =>
    <Search {...{ ...defaultProps, ...props }}/>;

  test('renders properly', () => {
    const wrapper = renderer
      .create(searchComponent())
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
