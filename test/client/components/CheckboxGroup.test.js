import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckboxGroup from 'client/components/CheckboxGroup/CheckboxGroup';
// import renderer from 'react-test-renderer';
import Checkbox from '../../../client/components/Checkbox/Checkbox';

describe('CheckboxGroup', () => {
  const data = {
    dataSet: [
      {'eu': 'Europe'},
      {'ph': 'Philippines'},
    ],
    selected: ['eu'],
  };
  const wrapper = shallow(<CheckboxGroup data={data} />);

  test('count of checkboxes', () => {
    const p = wrapper.find(Checkbox);
    expect(p).toHaveLength(data.dataSet.length);
  });

});
