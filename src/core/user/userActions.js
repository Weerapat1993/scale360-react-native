import { LOGIN_USER } from './userActionTypes'

export const loginUserRequest = (type) => ({ type }) 
export const loginUserSuccess = (data, type) => ({ data, type })
export const loginUserFailure = (error, type) => ({ error, type })  

export const loginUser = (body) => (dispatch, getState) => {
  const url = 'http://localhost:8000/api/login'
  dispatch(loginUserRequest(LOGIN_USER.REQUEST))
  fetch(url, {
    method: 'POST',
    body
  })
    .then(res => res.json())
    .then(res => dispatch(loginUserSuccess(res, LOGIN_USER.SUCCESS)))
    .catch(err => dispatch(loginUserFailure(err, LOGIN_USER.FAILURE)))
}