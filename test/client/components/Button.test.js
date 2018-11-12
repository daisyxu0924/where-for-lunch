import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from 'client/components/Button/Button';
// import renderer from 'react-test-renderer';

describe('Button', () => {
  const icon = 'foodPlace';

  test('must dont have disabled attribute when disabled is false', () => {
    const dom = mount( <Button icon={icon} disabled = {false} /> )
    const button = dom.childAt(0)
    expect( button.getDOMNode().attributes.getNamedItem('disabled'))
    .toBe(null);
  });

  test('must have disabled attribute when disabled is true', () => {
    const dom = mount( <Button icon={icon} disabled = {true} /> )
    const button = dom.childAt(0)
    expect( button.getDOMNode().attributes.getNamedItem('disabled'))
    .not.toBe(null);
  });  


});

 