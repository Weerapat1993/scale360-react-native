import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-native-redux-router'
import { taskReducer } from './task'
import { userReducer } from './user'

export default combineReducers({
  routerReducer,
  form: formReducer,
  task: taskReducer,
  user: userReducer
})
