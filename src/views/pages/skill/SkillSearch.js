//import liraries
import React, { Component } from 'react';
import ReactNative from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const {
  StyleSheet,
  TextInput,
  Image,
  View,
} = ReactNative


const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  searchBoxMessage: {
    flex: 2,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingRight: 0, 
  }
})

// create a component
class SkillSearch extends Component {
  render() {
    const { onKey } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.searchIcon}>
          <Icon name="search" size={20} color="#CCC" />
        </View>
        
        <TextInput 
          placeholder='Search'
          style={ styles.searchBoxMessage }
          onChangeText={(value) => onKey(value)} 
        />
      </View>
    );
  }
}

export default SkillSearch