import { LOGIN_USER } from './userActionTypes'
import { loginUserRequest, loginUserSuccess, loginUserFailure } from './userFunction'

export const initialState = {
  data: [],
  loading: false,
  error: null,
  login: false,
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER.REQUEST:
      return loginUserRequest(state, action)
    case LOGIN_USER.SUCCESS:
      return loginUserSuccess(state, action)
    case LOGIN_USER.FAILURE:
      return loginUserFailure(state, action)
    default: 
      return state
  }
}