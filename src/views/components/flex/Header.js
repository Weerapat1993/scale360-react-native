import React from 'react'
import { Platform, View } from 'react-native'

class Header extends React.Component {
  render() {
    const { height, color, children } = this.props
    return (
      <View style={{ 
        flexDirection: 'row', 
        paddingTop: 20, 
        height: Platform.OS === 'ios' ? height+20 : height, 
        backgroundColor: color, 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        { children }
      </View>
    )
  }
}

Header.defaultProps = {
  height: 60,
  color: '#3f51b5',
};


export default Header