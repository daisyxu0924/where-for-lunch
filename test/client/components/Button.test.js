import React from 'react';
import { shallow } from 'enzyme';
import Button from 'client/components/Button/Button';

describe('Button', () => {

  test('should render', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.length).toBe(1);
  });

  test('should be disabled when passed with isDisabled=true property', () => {
    const wrapper = shallow(<Button isDisabled={true}/>);
    const isButtonDisabled = wrapper.find('button').props().disabled;
    expect(isButtonDisabled).toBeTruthy();
  });

  test('should not be disabled when passed with isDisabled=false property', () => {
    const wrapper = shallow(<Button isDisabled={false}/>);
    const isButtonDisabled = wrapper.find('button').props().disabled;
    expect(isButtonDisabled).toBeFalsy();
  });

  test('should not be disabled when passed without isDisabled property', () => {
    const wrapper = shallow(<Button />);
    const isButtonDisabled = wrapper.find('button').props().disabled;
    expect(isButtonDisabled).toBeFalsy();
  });
});
