import React from 'react'
import { Platform, View } from 'react-native'
import { Actions } from 'react-native-redux-router'
import { Button } from 'react-native-elements'
import { btnPrimary } from '../../styles/variables'

const styles = {
  container: (height, color) => ({
    flexDirection: 'row', 
    paddingTop: 20, 
    height: Platform.OS === 'ios' ? height+20 : height, 
    backgroundColor: color, 
    alignItems: 'center',
    justifyContent: 'center'
  }),
  menuLeft: {

  },
  menuCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuRight: {

  },
  buttonMenu: {
    margin: 0, 
    padding: 0, 
    height: 40,
  }
}

class Header extends React.Component {
  onPrev(){
    Actions.pop();
  }

  render() {
    const { height, color, children } = this.props
    return (
      <View style={styles.container(height, color)}>
        <View style={styles.menuLeft}>
          <Button 
            onPress={this.onPrev.bind(this)} 
            icon={{ name: 'arrow-left', type: 'font-awesome' }} 
            backgroundColor={btnPrimary}
            buttonStyle={styles.buttonMenu}
          />
        </View>
        <View style={styles.menuCenter}>
          { children }
        </View>
        <View style={styles.menuRight}>
          <Button 
            onPress={this.onPrev.bind(this)} 
            icon={{ name: 'arrow-right', type: 'font-awesome' }} 
            backgroundColor={btnPrimary}
            buttonStyle={styles.buttonMenu}
          />
        </View>
      </View>
    )
  }
}

Header.defaultProps = {
  height: 60,
  color: '#3f51b5',
};


export default Header