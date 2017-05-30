import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-native-redux-router'
import { coreReducer } from './core'
import { userReducer } from './user'

export default combineReducers({
  routerReducer,
  form: formReducer,
  core: coreReducer,
  user: userReducer,
})