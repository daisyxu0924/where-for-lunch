import React from 'react';
import { shallow } from 'enzyme';
import { Search } from 'containers/Search';

describe('Search Container', () => {
  const mockFn = jest.fn();
  const props = {
    condition: {},
    setRadius: mockFn,
    fetchPlaces: mockFn,
  };

  const wrapper = shallow(
    <Search {...props}/>,
  );

  test('renders properly', () => {
    expect(wrapper.find('form').children().length).toBe(2);
    expect(wrapper.find('Condition').length).toBe(1);
    expect(wrapper.find('Button').length).toBe(1);
  });
});
