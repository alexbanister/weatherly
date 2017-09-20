// import React from 'react';
import Location from '../lib/Location.js';
// import { shallow } from 'enzyme';

describe ('Location', () => {
  let myLocation = new Location('Denver, CO')

  it('should store a query', () => {
    expect(myLocation.query).toEqual('Denver, CO')
  })

  it('should load a key from a config file', () => {
    expect(myLocation.key).not.toEqual(undefined)
  })

})
