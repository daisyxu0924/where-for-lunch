import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from 'client/containers/HomePage';
import Button from 'client/components/Button/Button';
import renderer from 'react-test-renderer';

describe('HomePage container', () => {
  const defaultProps = {
    condition: {},
    place: {},
  };

  const homepageComponent = props => (
    <HomePage {...{ ...defaultProps, ...props }}/>
  );

  test('button disabled when latitude and longitude not present', () => {
    const wrapper = shallow(
      homepageComponent(),
    );

    expect(wrapper.find(Button).prop('disabled')).toBe(true);
  });

  test('renders correctly', () => {
    const wrapper = renderer
      .create(homepageComponent())
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
