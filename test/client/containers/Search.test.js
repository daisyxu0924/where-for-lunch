import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Search } from 'containers/Search';

describe('Search Container', () => {
  const mockFn = jest.fn();
  const defaultProps = {
    condition: {
      prices: [],
    },
    setRadius: mockFn,
    setPrices: mockFn,
    fetchPlaces: mockFn,
  };
  const searchComponent = props =>
    <Search {...{ ...defaultProps, ...props }}/>;

  const shallowWrapper = shallow(searchComponent());

  test('it always renders `Condition`', () => {
    const condition = shallowWrapper.find('Condition');
    expect(condition.length).toBe(1);
  });

  test('it always renders `Button`', () => {
    const button = shallowWrapper.find('Button');
    expect(button.length).toBe(1);
  });

  test('renders properly', () => {
    const wrapper = renderer
      .create(searchComponent())
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
