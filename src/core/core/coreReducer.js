// import { CORE } from '../constants'
import { CORE } from './coreActionTypes'
import { coreRequest, coreFailure, fetchCoreSuccess, createCoreSuccess, updateCoreSuccess, deleteCoreSuccess } from './coreFunction'

export const initialState = {
  data: [],
  loading: true
};

export const coreReducer = (state = initialState, action) => {
  if(action === undefined) return state
  switch (action.type) {
    case CORE.FETCH.REQUEST:
    case CORE.CREATE.REQUEST:
    case CORE.UPDATE.REQUEST:
    case CORE.DELETE.REQUEST:
      return coreRequest(state, action)
    case CORE.FETCH.FAILURE:
    case CORE.CREATE.FAILURE:
    case CORE.UPDATE.FAILURE:
    case CORE.DELETE.FAILURE:
      return coreFailure(state, action)
    // FETCH_CORE_SUCCESS: ================================
    case CORE.FETCH.SUCCESS:
      return fetchCoreSuccess(state, action)
    // CREATE_CORE_SUCCESS: ================================
    case CORE.CREATE.SUCCESS:
      return createCoreSuccess(state, action)
    // UPDATE_CORE_SUCCESS: ================================
    case CORE.UPDATE.SUCCESS:
      return updateCoreSuccess(state, action)
    // CREATE_CORE_SUCCESS: ================================
    case CORE.DELETE.SUCCESS:
      return deleteCoreSuccess(state, action)
    // DEFAULT: ================================
    default:
      return state
  }
}
