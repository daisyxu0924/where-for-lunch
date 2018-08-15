import React from 'react';
import { shallow } from 'enzyme';
import Place from 'client/components/Place/Place';
import renderer from 'react-test-renderer';

describe('Place Component', () => {
  test('With Enzyme, doest not render rating section when no rating passed over', () => {
    const place = { hehe: 'haha' };
    const wrapper = shallow(
      <Place place={place} />,
    );
    const p = wrapper.find('.rating');
    expect(p.length).toBe(0);
  });

  test('With Jest snapshot, renders rating section when present', () => {
    const place = { hehe: 'haha', rating: 3.5 };
    const placeComponent = renderer
      .create(<Place place={place} />)
      .toJSON();
    expect(placeComponent).toMatchSnapshot();
  });
});
