import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const grey = '#CCC'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500
  },
  loading: {
    color: grey,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const TitleDisplay = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.loading}>{title}</Text>
  </View>
)

export default TitleDisplay;
