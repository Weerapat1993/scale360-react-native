import nock from 'nock'
import { mockStore } from '../../../core/store'
import { TASK } from '../../../core/task/taskActionTypes'
import { taskActions } from '../../../core/task'
import { payloadActions } from '../coreActions' 

const data = [
  {
    title: 'Task 101',
    completed: false
  }
]

const ACTION = {
  REQUEST: {
    type: 'FETCH_TASK_REQUEST',
    payload: true
  },
  SUCCESS: {
    type: 'FETCH_TASK_SUCCESS',
    payload: data
  },
  FAILURE: {
    type: 'FETCH_TASK_FAILURE',
    payload: false
  },
}

const ACTION_ALL = {
  type: TASK.FETCH,
  payload: data
}

describe('async actions FETCH_TASK', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() =>{
    nock('https://jsonplaceholder.typicode.com/todos?userId=1')
  })

  it('creates when fetching tasks has been failure', () => {
    const expected = [
      ACTION.REQUEST,
      ACTION.FAILURE
    ]
    const store = mockStore({ task: {} })
    const recieved = store.getActions()

    return store.dispatch(taskActions.fetchTask())
      .then(() => { // return of async actions
        expect(recieved).toEqual(expected)
      })
  })
})

describe('async actions payloadAction', () => {
  afterEach(() => {
    nock.cleanAll()
  })
  
  it('should Function : payloadAction',() => {
    const expected = [
      ACTION.REQUEST,
      ACTION.SUCCESS
    ]
    const store = mockStore({ task: {} })
    store.dispatch(payloadActions(ACTION_ALL))
    const recieved = store.getActions()
    expect(recieved).toEqual(expected)
  })
})