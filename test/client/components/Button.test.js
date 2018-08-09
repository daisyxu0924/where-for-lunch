import React from 'react';
import { shallow } from 'enzyme';
import Button from 'client/components/Button/Button';

describe('Button component', () => {
  test('calls onClick function when clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Button onClick={mockFn}/>,
    );
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('shows text when present', () => {
    const text = 'sample';
    const wrapper = shallow(
      <Button>{text}</Button>,
    );
    expect(wrapper.text()).toBe(text);
  });
});
