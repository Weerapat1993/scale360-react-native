import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const white = '#FFF'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500
  },
  loading: {
    color: white,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class TitleDisplay extends React.Component {
  constructor() {
    super()

    this.state = {}
  }
  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>{title}</Text>
      </View>
    )
  }
}

export default TitleDisplay;
