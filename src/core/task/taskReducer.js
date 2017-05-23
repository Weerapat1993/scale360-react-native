// import { TASK } from '../constants'
import { TASK } from './taskActionTypes'
import { taskRequest, taskFailure, fetchTaskSuccess, createTaskSuccess, updateTaskSuccess, deleteTaskSuccess } from './taskFunction'

export const initialState = {
  data: [],
  loading: true
};

export const taskReducer = (state = initialState, action) => {
  if(action === undefined) return state
  switch (action.type) {
    case TASK.FETCH.REQUEST:
    case TASK.CREATE.REQUEST:
    case TASK.UPDATE.REQUEST:
    case TASK.DELETE.REQUEST:
      return taskRequest(state, action)
    case TASK.FETCH.FAILURE:
    case TASK.CREATE.FAILURE:
    case TASK.UPDATE.FAILURE:
    case TASK.DELETE.FAILURE:
      return taskFailure(state, action)
    // FETCH_TASK_SUCCESS: ================================
    case TASK.FETCH.SUCCESS:
      return fetchTaskSuccess(state, action)
    // CREATE_TASK_SUCCESS: ================================
    case TASK.CREATE.SUCCESS:
      return createTaskSuccess(state, action)
    // UPDATE_TASK_SUCCESS: ================================
    case TASK.UPDATE.SUCCESS:
      return updateTaskSuccess(state, action)
    // CREATE_TASK_SUCCESS: ================================
    case TASK.DELETE.SUCCESS:
      return deleteTaskSuccess(state, action)
    // DEFAULT: ================================
    default:
      return state
  }
}
