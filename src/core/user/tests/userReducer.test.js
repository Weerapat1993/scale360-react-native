import { initialState, userReducer } from '../userReducer'
import { LOGIN_USER } from '../userActionTypes'
import { loginUserRequest, loginUserSuccess, loginUserFailure } from '../userFunction'

var payload = {
  data: {
    id: 1,
    name: 'Admin Example',
    email: 'admin@example.com',
    password: 'qwerty',
  },
  status: 'OK',
  code: 200,
  error: {
    message: 'Login Successful'
  }
}

var error = {
  message: 'Error'
}

describe('User Reducer', () => {
  it(`should User Reducer : initialState`, () => {
    const action = {
      type: 'ETC'
    }
    const recieved = userReducer(undefined, action)
    const expected = initialState
    expect(recieved).toEqual(expected)
  })

  it(`should User Reducer : ${LOGIN_USER.REQUEST}`, () => {
    const action = {
      type: LOGIN_USER.REQUEST
    }
    const recieved = userReducer(initialState, action)
    const expected = loginUserRequest(initialState, action)
    expect(recieved).toEqual(expected)
  })

  it(`should User Reducer : ${LOGIN_USER.SUCCESS}`, () => {
    const action = {
      type: LOGIN_USER.SUCCESS,
      payload
    }
    const recieved = userReducer(initialState, action)
    const expected = loginUserSuccess(initialState, action)
    expect(recieved).toEqual(expected)
  })

  it(`should User Reducer : ${LOGIN_USER.FAILURE}`, () => {
    const action = {
      type: LOGIN_USER.FAILURE,
      error
    }
    const recieved = userReducer(initialState, action)
    const expected = loginUserFailure(initialState, action)
    expect(recieved).toEqual(expected)
  })
  it(`should User Reducer : ETC`, () => {
    const action = {
      type: 'ETC',
    }
    const recieved = userReducer(initialState, action)
    const expected = initialState
    expect(recieved).toEqual(expected)
  })
})