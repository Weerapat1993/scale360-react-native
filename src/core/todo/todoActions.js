// import { API } from '../constants'
import { fetchActions, payloadActions } from '../../utils'
import { TODO } from './todoActionTypes'

// FETCH_TODO
export const fetchTodo = () => fetchActions({
  type: TODO.FETCH,
  API: 'https://jsonplaceholder.typicode.com/todos?userId=1'
})

// CREATE_TODO
export const createTodo = (payload) => payloadActions({
  type: TODO.CREATE,
  payload
})

// UPDATE_TODO
export const updateTodo = (payload) => payloadActions({
  type: TODO.UPDATE,
  payload
})

// DELETE_TODO
export const deleteTodo = (payload) => payloadActions({
  type: TODO.DELETE,
  payload
})
