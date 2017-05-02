import { API } from '../constants'
import { fetchActions, payloadActions } from '../../utils'
import { TASK } from './taskActionTypes'

// FETCH_TASK
export const fetchTask = () => fetchActions({
  type: TASK.FETCH,
  API: API.TASK
})

// CREATE_TASK
export const createTask = (payload) => payloadActions({
  type: TASK.CREATE,
  payload
})

// UPDATE_TASK
export const updateTask = (payload) => payloadActions({
  type: TASK.UPDATE,
  payload
})

// DELETE_TASK
export const deleteTask = (payload) => payloadActions({
  type: TASK.DELETE,
  payload
})
