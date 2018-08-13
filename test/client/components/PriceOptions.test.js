import React from 'react';
import { shallow } from 'enzyme';
import PriceOptions from 'client/components/PriceOptions/PriceOptions';

describe('PriceOptions Component', () => {
  const defaultProps = {
    priceOptions: { selected: [] },
    action: jest.fn(),
  };
  it('renders 4 `LabelCheckbox`', () => {
    const wrapper = shallow(<PriceOptions { ...defaultProps }/>);
    const checkboxes = wrapper.find('LabelCheckbox');

    expect(checkboxes.length).toBe(4);
  });
});
