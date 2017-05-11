import nock from 'nock'
import { mockStore } from '../../store'

// import { API } from '../../constants'
// import { TASK } from '../../constants';
import { TASK } from '../taskActionTypes';
import { actionRequest, actionSuccess } from '../../../utils'
import { fetchTask } from '../taskActions';
import { data } from './data'

const payload = {
  id: 1,
  title: 'Task 101',
  completed: false
}

const actionName = [
  actionRequest(payload, TASK.FETCH.REQUEST),
  actionRequest(payload, TASK.CREATE.REQUEST),
  actionRequest(payload, TASK.UPDATE.REQUEST),
  actionRequest(payload, TASK.DELETE.REQUEST),
  actionSuccess(payload, TASK.FETCH.SUCCESS),
  actionSuccess(payload, TASK.CREATE.SUCCESS),
  actionSuccess(payload, TASK.UPDATE.SUCCESS),
  actionSuccess(payload, TASK.DELETE.SUCCESS),
]

const actionTypeName = [
  TASK.FETCH.REQUEST,
  TASK.CREATE.REQUEST,
  TASK.UPDATE.REQUEST,
  TASK.DELETE.REQUEST,
  TASK.FETCH.SUCCESS,
  TASK.CREATE.SUCCESS,
  TASK.UPDATE.SUCCESS,
  TASK.DELETE.SUCCESS,
]

describe('Task Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should Task Action '+actionTypeName[i], () => {
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

describe('async actions '+TASK.FETCH.REQUEST, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() =>{
    nock('https://jsonplaceholder.typicode.com/todos?userId=1')
  })

  it('creates when fetching todos has been done', () => {
    const expected = [
      { type: TASK.FETCH.REQUEST, payload: true },
      { type: TASK.FETCH.FAILURE, payload: false }
    ]
    const store = mockStore({ task: {} })
    const recieved = store.getActions()

    return store.dispatch(fetchTask())
      .then(() => { // return of async actions
        expect(recieved).toEqual(expected)
      })
  })
})
