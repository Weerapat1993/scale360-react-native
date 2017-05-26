import { StyleSheet } from 'react-native'
import { bgColor } from '../../styles/variables'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: bgColor,
    paddingTop: 25,
    justifyContent: 'space-between'
  }
})
