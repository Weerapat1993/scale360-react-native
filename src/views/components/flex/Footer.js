import React from 'react'
import { View } from 'react-native'


class Footer extends React.Component {
  render() {
    const { height, color, children } = this.props
    return (
      <View style={{ flexDirection: 'row', height, backgroundColor: color, alignItems: 'center', justifyContent: 'center' }} >
        { children }
      </View>
    )
  }
}

Footer.defaultProps = {
  height: 50,
  color: '#3f51b5',
};


export default Footer