import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { initalState } from '../userReducer'
import { LOGIN_USER } from '../userActionTypes'
import { loginUser, loginUserRequest, loginUserSuccess, loginUserFailure } from '../userActions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


const data = {
  email: 'admin@example.com',
  password: 'qwerty',
}

const payload = {
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

const error = {
  message: 'User is Not Found'
}

const ACTION = {
  REQUEST: { type: LOGIN_USER.REQUEST },
  SUCCESS: { type: LOGIN_USER.SUCCESS, payload },
  FAILURE: { type: LOGIN_USER.FAILURE, error: Error(error.message) },
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

  // it('should User Action : Login User [SUCCESS]', () => {
  //   const store = mockStore({ user: initalState  })
  //   store.dispatch(loginUser(data))
  //   const recieved = store.getActions()
  //   const expected = [
  //     ACTION.REQUEST,
  //     ACTION.SUCCESS,
  //   ]
  //   expect(expected).toEqual(recieved);
  // })

  // it('should User Action : Login User [FAILURE]', () => {
  //   const expected = [
  //     ACTION.REQUEST,
  //     ACTION.FAILURE,
  //   ]
  //   const store = mockStore({ user: initalState })
  //   store.dispatch(loginUser(data))
  //   store.dispatch(loginUserFailure(error, LOGIN_USER.FAILURE))
  //   let received = store.getActions()
  //   expect(received).toEqual(expected)
  // })
})

// Nock API
describe ('User Actions '+LOGIN_USER.REQUEST, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should User Action '+LOGIN_USER.SUCCESS, () => {
    nock('http://localhost:8000')
      .post('/api/v1/login', data)
      .reply(200, payload)
    const store = mockStore({ auth: {} })
    const recieved = store.getActions()
    const expected = [
      ACTION.REQUEST,
      ACTION.SUCCESS
    ]
    return store.dispatch(loginUser(data))
      .then(res => {
        expect(recieved).toEqual(expected)
      })
  });
  it('should User Action '+LOGIN_USER.FAILURE, () => {
    nock('http://localhost:8000')
      .post('/api/v1/login', data)
      .replyWithError(error.message)
    const store = mockStore({ auth: {} })
    const recieved = store.getActions()
    const expected = [
      ACTION.REQUEST,
      ACTION.FAILURE
    ]
    return store.dispatch(loginUser(data))
      .then(res => {
        expect(recieved).toEqual(expected)
      })
  });
});