import React from 'react';
import { shallow } from 'enzyme';
import LabelCheckbox from 'client/components/LabelCheckbox/LabelCheckbox';

describe('LabelCheckbox Component', () => {
  const defaultProps = {
    label: 'test label',
    name: 'test name',
    onClick: jest.fn(),
    value: 'test value',
  };

  it('is CHECKED if "checked props" is TRUE', () => {
    const wrapper = shallow(<LabelCheckbox checked {...defaultProps}/>);
    const checkboxes = wrapper.find('input');

    expect(checkboxes.prop('checked')).toBe(true);
  });
});
