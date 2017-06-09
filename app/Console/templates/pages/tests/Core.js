import React from 'react'
import { shallow } from 'enzyme'
import { ${name_pascal} } from '../${name_pascal}'

const props = {

}

describe('<${name_pascal} />', () => {
  const wrapper = shallow(<${name_pascal} {...props} />)
  it('should be instance of ${name_pascal}', () => {
    const recieved = wrapper.length
    expect(recieved).toEqual(1)
  });
});
