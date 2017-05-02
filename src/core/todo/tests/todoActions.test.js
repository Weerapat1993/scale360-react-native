import nock from 'nock'
import { mockStore } from '../../store'

// import { API } from '../../constants'
// import { TODO } from '../../constants';
import { TODO } from '../todoActionTypes';
import { actionRequest, actionSuccess } from '../../../utils'
import { fetchTodo } from '../todoActions';
import { data } from './data'

const payload = {
  id: 1,
  title: 'Todo 101',
  completed: false
}

const actionName = [
  actionRequest(payload, TODO.FETCH.REQUEST),
  actionRequest(payload, TODO.CREATE.REQUEST),
  actionRequest(payload, TODO.UPDATE.REQUEST),
  actionRequest(payload, TODO.DELETE.REQUEST),
  actionSuccess(payload, TODO.FETCH.SUCCESS),
  actionSuccess(payload, TODO.CREATE.SUCCESS),
  actionSuccess(payload, TODO.UPDATE.SUCCESS),
  actionSuccess(payload, TODO.DELETE.SUCCESS),
]

const actionTypeName = [
  TODO.FETCH.REQUEST,
  TODO.CREATE.REQUEST,
  TODO.UPDATE.REQUEST,
  TODO.DELETE.REQUEST,
  TODO.FETCH.SUCCESS,
  TODO.CREATE.SUCCESS,
  TODO.UPDATE.SUCCESS,
  TODO.DELETE.SUCCESS,
]

describe('Todo Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should Todo Action '+actionTypeName[i], () => {
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

describe('async actions '+TODO.FETCH.REQUEST, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() =>{
    nock('https://jsonplaceholder.typicode.com/todos?userId=1')
  })

  it('creates when fetching todos has been done', () => {
    const expected = [
      { type: TODO.FETCH.REQUEST, payload: true },
      { type: TODO.FETCH.SUCCESS, payload: data }
    ]
    const store = mockStore({ todo: {} })
    const recieved = store.getActions()

    return store.dispatch(fetchTodo())
      .then(() => { // return of async actions
        expect(recieved).toEqual(expected)
      })
  })
})
