import React from 'react';
import { mount } from 'enzyme';
import Checkbox from '../../../client/components/Checkbox/Checkbox';

describe('Checkbox', () => {
  const data = { 
    value: 'eu',
    title: 'Europe',
    isChecked: true, 
    onChange: () => {}
  }
  const wrapper = mount(<Checkbox {...data} />);

  test('same value', () => {
    const p = wrapper.find('input').getDOMNode().attributes.getNamedItem('value');
    expect(p.value).toBe('eu');
  });

});
