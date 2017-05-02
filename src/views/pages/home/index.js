import React from 'react'
import { Actions } from 'react-native-redux-router'
import {
  View,
  LayoutAnimation,
  Image,
  Text,
  Button,
} from 'react-native'
import { styles } from './styles'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      text: 'NULL'
    }
  }

  handleClick = (value) => {
    this.setState({ text: `Btn ${value} Pressed`});
  }

  componentWillUpdate(nextProp, nextState) {
    LayoutAnimation.easeInEaseOut()
  }
  render () {
    return (
      <View style={styles.container}>
        {/* Product Card */}
        <View style={styles.card}>
          <Image
            style={styles.cardImg}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={styles.cardHeader}>
            <Text>Product</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.colorRed}>-20%</Text>
            <Text>24 Baht.-</Text>
          </View>
        </View>
        {/* Comment Item with Avatar */}
        <Button onPress={Actions.task} title="Go to Task page" />
        <View style={styles.postCard}>
          <Image
            style={styles.avatarIcon}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={styles.postBody}>
            <View style={styles.rowBlock}>
              <Text style={styles.bold}>Weerapat</Text>
              <Text style={styles.colorGray}>27 เมษายน 2560</Text>
            </View>
            <Text style={styles.postDetail}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </View>
        <Button onPress={Actions.todo} title="Go to Todo page" />
        <View style={styles.postCard}>
          <Image
            style={styles.avatarIcon}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={styles.postBody}>
            <View style={styles.rowBlock}>
              <Text style={styles.bold}>Weerapat</Text>
              <Text style={styles.colorGray}>27 เมษายน 2560</Text>
            </View>
            <Text style={styles.postDetail}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </View>
        <Button onPress={Actions.about} title="Go to About page" />
      </View>
    )
  }
}

export default Home;
