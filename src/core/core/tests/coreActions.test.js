import nock from 'nock'
import { mockStore } from '../../store'

// import { API } from '../../constants'
// import { CORE } from '../../constants';
import { CORE } from '../coreActionTypes';
import { actionRequest, actionSuccess } from '../../../utils'
import { fetchCore } from '../coreActions';
import { data } from './data'

const payload = {
  id: 1,
  title: 'Core 101',
  completed: false
}

const actionName = [
  actionRequest(payload, CORE.FETCH.REQUEST),
  actionRequest(payload, CORE.CREATE.REQUEST),
  actionRequest(payload, CORE.UPDATE.REQUEST),
  actionRequest(payload, CORE.DELETE.REQUEST),
  actionSuccess(payload, CORE.FETCH.SUCCESS),
  actionSuccess(payload, CORE.CREATE.SUCCESS),
  actionSuccess(payload, CORE.UPDATE.SUCCESS),
  actionSuccess(payload, CORE.DELETE.SUCCESS),
]

const actionTypeName = [
  CORE.FETCH.REQUEST,
  CORE.CREATE.REQUEST,
  CORE.UPDATE.REQUEST,
  CORE.DELETE.REQUEST,
  CORE.FETCH.SUCCESS,
  CORE.CREATE.SUCCESS,
  CORE.UPDATE.SUCCESS,
  CORE.DELETE.SUCCESS,
]

describe('Core Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should Core Action '+actionTypeName[i], () => {
      const recieved = actionName[i]
      const expected = {
        type: actionTypeName[i],
        payload
      }
      expect(expected).toEqual(recieved);
    });
  }
});

// Nock API

describe('async actions '+CORE.FETCH.REQUEST, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() =>{
    nock('https://jsonplaceholder.typicode.com/todos?userId=1')
  })

  it('creates when fetching todos has been done', () => {
    const expected = [
      { type: CORE.FETCH.REQUEST, payload: true },
      { type: CORE.FETCH.FAILURE, payload: false }
    ]
    const store = mockStore({ core: {} })
    const recieved = store.getActions()

    return store.dispatch(fetchCore())
      .then(() => { // return of async actions
        expect(recieved).toEqual(expected)
      })
  })
})
