import { API } from '../constants'
import { CORE } from './coreActionTypes'
import { asyncActions, payloadActions } from '../../utils'
// import axios from 'axios'

// export const fetchCoreRequest = (type) => ({ type })
// export const fetchCoreSuccess = (payload, type) => ({ payload, type })
// export const fetchCoreFailure = (error, type) => ({ error, type })

// export const fetchCore = () => (dispatch, getState) => {
//   dispatch(fetchCoreRequest(CORE.FETCH.REQUEST))
//   return axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
//     .then(res => dispatch(fetchCoreSuccess(res.data, CORE.FETCH.SUCCESS)))
//     .catch(error => dispatch(fetchCoreFailure(error, CORE.FETCH.FAILURE)))
// }


export const fetchCore = () => asyncActions({
  type: CORE.FETCH,
  API: 'https://jsonplaceholder.typicode.com/todos?userId=1'
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

// export const createCoreRequest = (type) => ({ type })
// export const createCoreSuccess = (payload, type) => ({ payload, type })
// export const createCoreFailure = (error, type) => ({ error, type })

// CREATE_CORE
// export const createCore = (payload) => (dispatch, getState) => {
//   dispatch(createCoreRequest(CORE.CREATE.REQUEST))
//   dispatch(createCoreSuccess(payload, CORE.CREATE.SUCCESS))
// }


// export const updateCoreRequest = (type) => ({ type })
// export const updateCoreSuccess = (payload, type) => ({ payload, type })
// export const updateCoreFailure = (error, type) => ({ error, type })

// UPDATE_CORE
// export const updateCore = (payload) => (dispatch, getState) => {
//   dispatch(updateCoreRequest(CORE.UPDATE.REQUEST))
//   dispatch(updateCoreSuccess(payload, CORE.UPDATE.SUCCESS))
// }

// export const deleteCoreRequest = (type) => ({ type })
// export const deleteCoreSuccess = (payload, type) => ({ payload, type })
// export const deleteCoreFailure = (error, type) => ({ error, type })

// // DELETE_CORE
// export const deleteCore = (payload) => (dispatch, getState) => {
//   dispatch(deleteCoreRequest(CORE.DELETE.REQUEST))
//   dispatch(deleteCoreSuccess(payload, CORE.DELETE.SUCCESS))
// }
