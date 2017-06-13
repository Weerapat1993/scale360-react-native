import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  skillIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  skillIcon: {
    width: 50,
    height: 50,
  },
  skillDetails: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
})

class SkillItem extends Component {
  render() {
    const { data } = this.props
    return (
      <TouchableOpacity style={styles.contaienr}>
        <View style={styles.skillIconView}>
          <Image source={{ uri: data.icon ? data.icon : `http://treeofsavior-th.com/images/icon-class/${data.name.toLowercase()}.png` }} style={styles.skillIcon} />
        </View>
        <View style={styles.skillDetails}>
          <Text>{data.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default SkillItem