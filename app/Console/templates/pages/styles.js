import { StyleSheet } from 'react-native'
import { bgColor } from '../../styles/variables'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'steelblue',
    paddingTop: 25,
    justifyContent: 'space-between'
  },
  inputContainer: {
    padding: 8,
    backgroundColor: 'steelblue',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: bgColor,
    borderRadius: 2,
  },
})
