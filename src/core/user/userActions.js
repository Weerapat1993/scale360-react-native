import { LOGIN_USER } from './userActionTypes'

export const loginUserRequest = (type) => ({ type }) 
export const loginUserSuccess = (payload, type) => ({ payload, type })
export const loginUserFailure = (error, type) => ({ error, type })  

export const loginUser = (body) => (dispatch, getState) => {
  const url = 'http://localhost:8000/api/v1/login'
  dispatch(loginUserRequest(LOGIN_USER.REQUEST))
  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify( body )
  })
    .then(res => res.json())
    .then(res => dispatch(loginUserSuccess(res, LOGIN_USER.SUCCESS)))
    .catch(err => dispatch(loginUserFailure(err, LOGIN_USER.FAILURE)))
}