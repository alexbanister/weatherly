import React from 'react';
import DayCard from '../lib/DayCard.js';
import { shallow } from 'enzyme';

describe('Day Card', () => {

  let data = {
    index: '0',
    day: 'Wed',
    ampm: 'AM',
    icon: 'clear',
    low: '12',
    high: '26.6',
  };

  it('should be a function', () => {
    expect(typeof DayCard).toEqual('function');
  })

  it('should receive props', () => {
    let myCard = shallow(<DayCard
      key={data.index}
      day={data.day}
      icon={data.icon}
      low={data.low}
      high={data.high}
    />);
    let inst = myCard.instance();
    expect(inst.props.day).toEqual(data.day);
    expect(inst.props.icon).toEqual(data.icon);
    expect(inst.props.low).toEqual(data.low);
    expect(inst.props.high).toEqual(data.high);
  })
})
