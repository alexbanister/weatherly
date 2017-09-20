import React from 'react';
import HourlyCard from '../lib/HourlyCard.js';
import { shallow } from 'enzyme';


describe('Hourly Card', () => {

  let data = {
    index: '0',
    hour: '10',
    ampm: 'AM',
    icon: 'clear',
    temp_c: '20.4',
  };

  it('should be a function', () => {
    expect(typeof HourlyCard).toEqual('function');
  })

  it('should receive props', () => {
    let myCard = shallow(<HourlyCard
      key={data.index}
      hour={data.hour}
      ampm={data.ampm}
      icon={data.icon}
      temp={data.temp_c}
    />);
    let inst = myCard.instance();
    expect(inst.props.hour).toEqual(data.hour);
    expect(inst.props.ampm).toEqual(data.ampm);
    expect(inst.props.icon).toEqual(data.icon);
    expect(inst.props.temp).toEqual(data.temp_c);
  })
})
