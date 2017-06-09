import React from 'react'
import { shallow } from 'enzyme'
import { Core } from '../Core'

const props = {

}

describe('<Core />', () => {
  const wrapper = shallow(<Core {...props} />)
  it('should be instance of Core', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
