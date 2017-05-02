import { loadingData, fetchData, createData, updateData, deleteData } from '../../utils'
// import { TODO } from '../constants'
import { TODO } from './todoActionTypes'

const initialState = {
  data: [],
  loading: true
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO.FETCH.REQUEST:
    case TODO.CREATE.REQUEST:
    case TODO.UPDATE.REQUEST:
    case TODO.DELETE.REQUEST:
    case TODO.FETCH.FAILURE:
    case TODO.CREATE.FAILURE:
    case TODO.UPDATE.FAILURE:
    case TODO.DELETE.FAILURE:
      return loadingData(state, action)
    // FETCH_TODO_SUCCESS: ================================
    case TODO.FETCH.SUCCESS:
      return fetchData(state,action)
    // CREATE_TODO_SUCCESS: ================================
    case TODO.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_TODO_SUCCESS: ================================
    case TODO.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_TODO_SUCCESS: ================================
    case TODO.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}
