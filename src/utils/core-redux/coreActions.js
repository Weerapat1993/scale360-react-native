import axios from 'axios'

export const actionRequest = (type) => ({ type })
export const actionSuccess = (payload, type) => ({ payload, type })
export const actionFailure = (error, type) => ({ error, type })

export const asyncActions = (data) => (dispatch, getState) => {
  dispatch(actionRequest(data.type.REQUEST))
  return axios['get'](data.API)
    .then(res => dispatch(actionSuccess(res.data, data.type.SUCCESS)))
    .catch(error => dispatch(actionFailure(error, data.type.FAILURE)))
}

export const payloadActions = (data) => (dispatch, getState) => {
  dispatch(actionRequest(data.type.REQUEST))
  dispatch(actionSuccess(data.payload, data.type.SUCCESS))
}
