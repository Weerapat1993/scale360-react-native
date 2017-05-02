import { StyleSheet } from 'react-native'
import * as variables from './variables'

export const globalStyles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.bgColor
  },
})
