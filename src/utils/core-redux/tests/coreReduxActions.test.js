import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CORE } from '../../../core/core/coreActionTypes'
import { asyncActions } from '../coreActions'
import { data } from './data'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const actions = {
  type: CORE.FETCH,
  API: 'https://jsonplaceholder.typicode.com/todos?userId=1'
} 

const payload = {
  id: 1,
  title: 'Core 101',
  completed: false
}


describe ('Core Redux Actions SUCCESS', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/todos?userId=1')
      .reply(200, data)
  })

  it('should Core Redux Action '+CORE.FETCH.SUCCESS, () => {
    const store = mockStore({ core: {} })
    const recieved = store.getActions()
    const expected = [
      { type: CORE.FETCH.REQUEST },
      { type: CORE.FETCH.SUCCESS, payload: data },
    ]
    return store.dispatch(asyncActions(actions))
      .then(res => {
        expect(recieved).toEqual(expected)
      })
  });
});


describe ('Core Redux Actions FAILURE', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/todos?userId=1')
      .replyWithError('Error')
  })

  it('should Core Redux Action '+CORE.FETCH.FAILURE, () => {
    const store = mockStore({ core: {} })
    const recieved = store.getActions()
    const expected = [
      { type: CORE.FETCH.REQUEST },
      { type: CORE.FETCH.FAILURE, error: Error('Error') },
    ]
    return store.dispatch(asyncActions(actions))
      .then(res => {
        expect(recieved).toEqual(expected)
      })
  });
});