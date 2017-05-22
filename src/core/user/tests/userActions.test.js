import { initalState } from '../userReducer'
import { mockStore } from '../../store'
import { LOGIN_USER } from '../userActionTypes'
import { loginUser, loginUserRequest, loginUserSuccess, loginUserFailure } from '../userActions'

var data = {
  email: 'admin@example.com',
  password: 'qwerty',
}

var payload = {
  data: {
    id: 1,
    name: 'Admin Example',
    email: 'admin@example.com',
    password: 'qwerty',
  },
  status: 'OK',
  code: 200,
  error: null
}

var error = {
  message: 'User is Not Found'
}

var ACTION = {
  REQUEST: { type: LOGIN_USER.REQUEST },
  SUCCESS: { type: LOGIN_USER.SUCCESS, payload },
  FAILURE: { type: LOGIN_USER.FAILURE, error },
}

describe('User Actions', () => {
  it(`should User Action : ${LOGIN_USER.REQUEST}`, () => {
    const received = loginUserRequest(LOGIN_USER.REQUEST)
    const expected = { type: LOGIN_USER.REQUEST }
    expect(received).toEqual(expected)
  })

  it(`should User Action : ${LOGIN_USER.SUCCESS}`, () => {
    const received = loginUserSuccess(payload, LOGIN_USER.SUCCESS)
    const expected = { type: LOGIN_USER.SUCCESS, payload }
    expect(received).toEqual(expected)
  })

  it(`should User Action : ${LOGIN_USER.FAILURE}`, () => {
    const received = loginUserFailure(error, LOGIN_USER.FAILURE)
    const expected = { type: LOGIN_USER.FAILURE, error }
    expect(received).toEqual(expected)
  })

  it('should User Action : Login User [SUCCESS]', () => {
    const expected = [
      ACTION.REQUEST,
      ACTION.SUCCESS,
    ]
    const store = mockStore({ user: initalState })
    store.dispatch(loginUser(data))
    store.dispatch(loginUserSuccess(payload, LOGIN_USER.SUCCESS))
    let received = store.getActions()
    expect(received).toEqual(expected)
  })

  it('should User Action : Login User [FAILURE]', () => {
    const expected = [
      ACTION.REQUEST,
      ACTION.FAILURE,
    ]
    const store = mockStore({ user: initalState })
    store.dispatch(loginUser(data))
    store.dispatch(loginUserFailure(error, LOGIN_USER.FAILURE))
    let received = store.getActions()
    expect(received).toEqual(expected)
  })
})


