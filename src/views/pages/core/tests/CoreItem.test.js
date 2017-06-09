import React from 'react'
import { shallow } from 'enzyme'
import CoreItem from '../CoreItem'

const props = {
  core: {
    title: 'Core Title'
  },
  updateCore: jest.fn(),
  deleteCore: jest.fn(),
}

describe('<CoreItem />', () => {
  const wrapper = shallow(<CoreItem {...props} />)
  it('should be instance of CoreItem', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
