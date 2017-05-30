import React from 'react'
import { shallow } from 'enzyme'
import TitleDisplay from '../TitleDisplay'

describe('<TitleDisplay />', () => {
  const wrapper = shallow(<TitleDisplay />)
  it('should be instance of TitleDisplay', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
