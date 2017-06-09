import React from 'react'
import spyon from 'spyon'
import { shallow } from 'enzyme'
import ${name_pascal}List from '../${name_pascal}List'

const props = {
  data: [
    {
      title: '${name_pascal} Item',
      completed: false,
    }
  ],
  loading: false,
  update${name_pascal}: jest.fn(),
  delete${name_pascal}: jest.fn(),
}

const propsLoading = {
  data: undefined,
  loading: true,
  update${name_pascal}: jest.fn(),
  delete${name_pascal}: jest.fn(),
}

describe('<${name_pascal}List />', () => {
  const wrapper = shallow(<${name_pascal}List {...props} />)
  const wrapperLoading = shallow(<${name_pascal}List {...propsLoading} />)
  it('should be instance of ${name_pascal}List not loading', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });

  it('should be instance of ${name_pascal}List is Loading', () => {
    const recieved = wrapperLoading.length
    expect(recieved).toEqual(1)
  });

  it ('should be instance of ${name_pascal}List component renderRow', () => {
    const data = {
      rowData: {
        title: '${name_pascal} Item',
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
