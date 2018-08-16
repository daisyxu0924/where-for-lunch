import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Condition from 'client/components/Condition/Condition';

describe('Condition Component', () => {
  const defaultProps = {
    condition: {
      prices: ['1', '2'],
    },
    action: jest.fn(),
    onClickPrice: jest.fn(),
  };

  const conditionComponent = props => (
    <Condition { ...{ ...defaultProps, ...props } }/>
  );

  it('renders 4 `LabelCheckbox`', () => {
    const wrapper = shallow(conditionComponent());
    const checkboxes = wrapper.find('LabelCheckbox');

    expect(checkboxes.length).toBe(4);
  });

  it('renders equal checked `LabelCheckbox` with selected props', () => {
    // Valid condition.prices[] values = 1,2,3,4
    const wrapper = shallow(conditionComponent());
    const checkboxes = wrapper.find('[checked=true]');

    expect(checkboxes.length).toBe(defaultProps.condition.prices.length);
  });

  test('renders properly', () => {
    const wrapper = renderer
      .create(conditionComponent())
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
