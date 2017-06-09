import React from 'react'
import spyon from 'spyon'
import { shallow } from 'enzyme'
import CoreList from '../CoreList'

const props = {
  data: [
    {
      title: 'Core Item',
      completed: false,
    }
  ],
  loading: false,
  updateCore: jest.fn(),
  deleteCore: jest.fn(),
}

const propsLoading = {
  data: undefined,
  loading: true,
  updateCore: jest.fn(),
  deleteCore: jest.fn(),
}

describe('<CoreList />', () => {
  const wrapper = shallow(<CoreList {...props} />)
  const wrapperLoading = shallow(<CoreList {...propsLoading} />)
  it('should be instance of CoreList not loading', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });

  it('should be instance of CoreList is Loading', () => {
    const recieved = wrapperLoading.length
    expect(recieved).toEqual(1)
  });

  it ('should be instance of CoreList component renderRow', () => {
    const data = {
      rowData: {
        title: 'Core Item',
        completed: false
      }, 
      rowID: 1
    }
    const { rowData, rowID } = data
    let inst = wrapper.instance()
    inst.renderRow = spyon(inst.renderRow)
    inst.renderRow(rowData, null, rowID)
    let recieved = inst.renderRow.getTimesCalled()
    expect(recieved).toEqual(1);
  });
});
