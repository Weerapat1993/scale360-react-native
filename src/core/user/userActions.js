import axios from 'axios'
import { LOGIN_USER } from './userActionTypes'

export const loginUserRequest = (type) => ({ type }) 
export const loginUserSuccess = (payload, type) => ({ payload, type })
export const loginUserFailure = (error, type) => ({ error, type })  

export const loginUser = (body) => (dispatch, getState) => {
  const url = 'http://localhost:8000/api/v1/login'
  dispatch(loginUserRequest(LOGIN_USER.REQUEST))
  return axios.post(url, body)
    .then(res => dispatch(loginUserSuccess(res.data, LOGIN_USER.SUCCESS)))
    .catch(err => dispatch(loginUserFailure(err, LOGIN_USER.FAILURE)))
}