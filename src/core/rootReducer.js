import { combineReducers } from 'redux'
import { routerReducer } from 'react-native-redux-router'
import { taskReducer } from './task'
import { todoReducer } from './todo'

const rootReducer = combineReducers({
  routerReducer,
  task: taskReducer,
  todo: todoReducer,
})

export default rootReducer
