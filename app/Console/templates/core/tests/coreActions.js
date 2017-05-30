import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// import { API } from '../../constants'
import { ${name_upper} } from '../${name}ActionTypes';
import { fetch${name_pascal}, create${name_pascal}, update${name_pascal}, delete${name_pascal} } from '../${name}Actions';
import { data } from './data'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const endpoint = 'https://jsonplaceholder.typicode.com'
const routes = {
  FETCH: '/todos'
}

const query = {
  FETCH: { userId: 1 }
}

const payload = {
  id: 1,
  title: '${name_pascal} 101',
  completed: false
}

// FETCH ACTION
const FETCH_${name_upper}_ACTION = {
  REQUEST: { type: ${name_upper}.FETCH.REQUEST },
  SUCCESS: { type: ${name_upper}.FETCH.SUCCESS, payload: data  },
  FAILURE: { type: ${name_upper}.FETCH.FAILURE, error: Error('something awful happened') },
}

// TYPE ACTION
const action = (type) => ({
  REQUEST: { type: ${name_upper}[type].REQUEST },
  SUCCESS: { type: ${name_upper}[type].SUCCESS, payload },
  FAILURE: { type: ${name_upper}[type].FAILURE, error: Error('something awful happened') },
})

// EXPECTED ACTIONS
const expectActions = (type) => {
  const ACTION = action(type)
  return [
    ACTION.REQUEST,
    ACTION.SUCCESS,
  ]
} 

// ACTION
const actions = [ create${name_pascal}(payload), update${name_pascal}(payload), delete${name_pascal}(payload) ]
const actionTypes = ['CREATE','UPDATE','DELETE']

describe('${name_pascal} Actions', () => {
  for (let i = 0; i < actionTypes.length; i++) {
    it('should ${name_pascal} Action '+${name_upper}[actionTypes[i]].REQUEST, () => {
      const store = mockStore({ ${name}: {} })
      store.dispatch(actions[i]) 
      const recieved = store.getActions()
      const expected = expectActions(actionTypes[i])
      expect(expected).toEqual(recieved);
    });
  }
});

// Nock API
describe('async actions '+${name_upper}.FETCH.SUCCESS, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() => {
    nock(endpoint)
      .get(routes.FETCH)
      .query(query.FETCH)
      .reply(200, data)
  })

  it('creates when fetching todos has been done', () => {
    const store = mockStore({ ${name}: {} })
    const recieved = store.getActions()
    const expected = [
      FETCH_${name_upper}_ACTION.REQUEST,
      FETCH_${name_upper}_ACTION.SUCCESS
    ]

    return store.dispatch(fetch${name_pascal}())
      .then(res => {
        expect(recieved).toEqual(expected)
      })
  })
})

describe('async actions '+${name_upper}.FETCH.FAILURE, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() => {
    nock(endpoint)
      .get(routes.FETCH)
      .query(query.FETCH)
      .replyWithError('something awful happened');
  })

  it('creates when fetching todos has been done', () => {
    const store = mockStore({ ${name}: {} })
    const recieved = store.getActions()
    const expected = [
      FETCH_${name_upper}_ACTION.REQUEST,
      FETCH_${name_upper}_ACTION.FAILURE
    ]

    return store.dispatch(fetch${name_pascal}())
      .then(res => {
        expect(recieved).toEqual(expected)
      })
  })
})
