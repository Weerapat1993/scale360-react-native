import React from 'react'
import { shallow } from 'enzyme'
import TabBar from '../TabBar'

const props = {
  tabs: [
    {
      name: 'home',
      icon: 'home',
    },
    {
      name: 'feed',
      icon: 'whatshot',
    },
    {
      name: 'profile',
      icon: 'person',
    },
    {
      name: 'about',
      icon: 'info',
    }
  ]
}

describe('<TabBar />', () => {
  const wrapper = shallow(<TabBar {...props} />)
  it('should be instance of TabBar', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
