import React from 'react'
import { View } from 'react-native'

class Flex extends React.Component {
  render() {
    const { size, color, children, style } = this.props
    return (
      <View style={{ flex: size, backgroundColor: color, ...style }}>
        { children }
      </View>
    )
  }
}

Flex.defaultProps = {
  size: 1,
  color: 'white',
  style: {}
};

export default Flex