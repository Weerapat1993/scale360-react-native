import { API } from '../constants'
import { fetchActions, payloadActions } from '../../utils'
import { CORE } from './coreActionTypes'

// FETCH_CORE
export const fetchCore = () => fetchActions({
  type: CORE.FETCH,
  API: API.CORE
})

// CREATE_CORE
export const createCore = (payload) => payloadActions({
  type: CORE.CREATE,
  payload
})

// UPDATE_CORE
export const updateCore = (payload) => payloadActions({
  type: CORE.UPDATE,
  payload
})

// DELETE_CORE
export const deleteCore = (payload) => payloadActions({
  type: CORE.DELETE,
  payload
})

// export const fetchCore = () => (dispatch, getState) => {
//   dispatch(actionRequest(true, 'FETCH_CORE_REQUEST'))
//   fetch(API.CORE)
//     .then(res => res.json())
//     .then(res => dispatch(actionSuccess(res, 'FETCH_CORE_SUCCESS')))
//     .catch(error => dispatch(actionFailure(false, 'FETCH_CORE_FAILURE', error)))
// }
