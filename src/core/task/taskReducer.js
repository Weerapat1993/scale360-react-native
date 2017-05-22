import { loadingData, fetchData, createData, updateData, deleteData } from '../../utils'
// import { TASK } from '../constants'
import { TASK } from './taskActionTypes'
import { fetchTaskSuccess, createTaskSuccess, updateTaskSuccess, deleteTaskSuccess } from './taskFunction'

const initialState = {
  data: [],
  loading: true
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK.FETCH.REQUEST:
    case TASK.CREATE.REQUEST:
    case TASK.UPDATE.REQUEST:
    case TASK.DELETE.REQUEST:
    case TASK.FETCH.FAILURE:
    case TASK.CREATE.FAILURE:
    case TASK.UPDATE.FAILURE:
    case TASK.DELETE.FAILURE:
      return loadingData(state, action)
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
