import React from 'react';
import Header from '../lib/Header';
import { shallow } from 'enzyme';

describe('Current Weather functionality', () => {
  const wrapper = shallow(<Header />);
  // const button = wrapper.find('button');
  const input = wrapper.find('input');

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should input search', () => {
    expect(input.text()).toEqual('');
    expect(wrapper.state('searchVal')).toEqual('');

    input.simulate('change', { target: { value: 'den' } });

    expect(wrapper.state('searchVal')).toEqual('den');
  });

  it('Render form and suggestions', () => {
    expect(wrapper.find('.suggest-wrapper').length).toEqual(1);
    expect(wrapper.find('form').length).toEqual(1);
  });
});
