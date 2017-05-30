import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// import { API } from '../../constants'
import { CORE } from '../coreActionTypes';
import { fetchCore, createCore, updateCore, deleteCore } from '../coreActions';
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
  title: 'Core 101',
  completed: false
}

// FETCH ACTION
const FETCH_CORE_ACTION = {
  REQUEST: { type: CORE.FETCH.REQUEST },
  SUCCESS: { type: CORE.FETCH.SUCCESS, payload: data  },
  FAILURE: { type: CORE.FETCH.FAILURE, error: Error('something awful happened') },
}

// TYPE ACTION
const action = (type) => ({
  REQUEST: { type: CORE[type].REQUEST },
  SUCCESS: { type: CORE[type].SUCCESS, payload },
  FAILURE: { type: CORE[type].FAILURE, error: Error('something awful happened') },
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
const actions = [ createCore(payload), updateCore(payload), deleteCore(payload) ]
const actionTypes = ['CREATE','UPDATE','DELETE']

describe('Core Actions', () => {
  for (let i = 0; i < actionTypes.length; i++) {
    it('should Core Action '+CORE[actionTypes[i]].REQUEST, () => {
      const store = mockStore({ core: {} })
      store.dispatch(actions[i]) 
      const recieved = store.getActions()
      const expected = expectActions(actionTypes[i])
      expect(expected).toEqual(recieved);
    });
  }
});

// Nock API
describe('async actions '+CORE.FETCH.SUCCESS, () => {
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
    const store = mockStore({ core: {} })
    const recieved = store.getActions()
    const expected = [
      FETCH_CORE_ACTION.REQUEST,
      FETCH_CORE_ACTION.SUCCESS
    ]

    return store.dispatch(fetchCore())
      .then(res => {
        expect(recieved).toEqual(expected)
      })
  })
})

describe('async actions '+CORE.FETCH.FAILURE, () => {
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
    const store = mockStore({ core: {} })
    const recieved = store.getActions()
    const expected = [
      FETCH_CORE_ACTION.REQUEST,
      FETCH_CORE_ACTION.FAILURE
    ]

    return store.dispatch(fetchCore())
      .then(res => {
        expect(recieved).toEqual(expected)
      })
  })
})
