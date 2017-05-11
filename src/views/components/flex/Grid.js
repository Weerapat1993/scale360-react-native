import React from 'react'
import { View } from 'react-native'

class Grid extends React.Component {
  render() {
    const { flexDirection, children, style } = this.props
    return (
      <View style={{ flex: 1, flexDirection, ...style }}>
        { children }
      </View>
    )
  }
}

Grid.defaultProps = {
  flexDirection: 'column',
  style: {}
};


export default Grid