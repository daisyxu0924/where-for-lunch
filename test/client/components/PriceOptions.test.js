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

  it('renders equal checked `LabelCheckbox` with selected props', () => {
    // Valid selected values = 1,2,3,4
    const props = { ...defaultProps, priceOptions: { selected: ['1', '2'] } };
    const wrapper = shallow(<PriceOptions { ...props }/>);
    const checkboxes = wrapper.find('[checked=true]');

    expect(checkboxes.length).toBe(props.priceOptions.selected.length);
  });
});
