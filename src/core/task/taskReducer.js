import { loadingData, fetchData, createData, updateData, deleteData } from '../../utils'
// import { TASK } from '../constants'
import { TASK } from './taskActionTypes'

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
      return fetchData(state,action)
    // CREATE_TASK_SUCCESS: ================================
    case TASK.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_TASK_SUCCESS: ================================
    case TASK.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_TASK_SUCCESS: ================================
    case TASK.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}
