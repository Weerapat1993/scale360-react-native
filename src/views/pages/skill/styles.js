import { StyleSheet } from 'react-native'
import * as variables from '../../styles/variables'

export const pageStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.bgColor
  },
})
