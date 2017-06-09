import React from 'react'
import { shallow } from 'enzyme'
import { Form } from '../Form'

const props = {}

describe('<Form />', () => {
  const wrapper = shallow(<Form {...props} />)
  it('should be instance of Form', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
