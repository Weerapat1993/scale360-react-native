import React from 'react'
import { shallow } from 'enzyme'
import ${name_pascal}Form from '../${name_pascal}Form'

const props = {
  onSubmit: jest.fn(),
  onPrev: jest.fn(),
  handleSubmit: jest.fn(),
}

describe('<${name_pascal}Form />', () => {
  const wrapper = shallow(<${name_pascal}Form {...props} />)
  it('should be instance of ${name_pascal}Form', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
