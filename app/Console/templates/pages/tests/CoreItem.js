import React from 'react'
import { shallow } from 'enzyme'
import ${name_pascal}Item from '../${name_pascal}Item'

const props = {
  ${name}: {
    title: '${name_pascal} Title'
  },
  update${name_pascal}: jest.fn(),
  delete${name_pascal}: jest.fn(),
}

describe('<${name_pascal}Item />', () => {
  const wrapper = shallow(<${name_pascal}Item {...props} />)
  it('should be instance of ${name_pascal}Item', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
