import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from 'client/containers/HomePage';
import Button from 'client/components/Button/Button';

describe('HomePage container', () => {
  test('button disabled when latitude and longitude not present', () => {
    const props = {
      condition: {},
    };

    const wrapper = shallow(
      <HomePage {...props}/>,
    );

    expect(wrapper.find(Button).prop('disabled')).toBe(true);
  });
});
