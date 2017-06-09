import React from 'react'
import { shallow } from 'enzyme'
import CoreForm from '../CoreForm'

const props = {
  onSubmit: jest.fn(),
  onPrev: jest.fn(),
  handleSubmit: jest.fn(),
}

describe('<CoreForm />', () => {
  const wrapper = shallow(<CoreForm {...props} />)
  it('should be instance of CoreForm', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
