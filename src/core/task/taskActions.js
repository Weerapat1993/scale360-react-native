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

// export const fetchTask = () => (dispatch, getState) => {
//   dispatch(actionRequest(true, 'FETCH_TASK_REQUEST'))
//   fetch(API.TASK)
//     .then(res => res.json())
//     .then(res => dispatch(actionSuccess(res, 'FETCH_TASK_SUCCESS')))
//     .catch(error => dispatch(actionFailure(false, 'FETCH_TASK_FAILURE', error)))
// }
