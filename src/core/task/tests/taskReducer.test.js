// import { TASK } from '../../constants';
import { TASK } from '../taskActionTypes';
import { taskReducer } from '../taskReducer'
import { loadingData, fetchData, createData, updateData, deleteData } from '../../../utils'

const initialState = {
  loading: false,
  data: [
    {
      id: 1,
      title: 'Task 101',
      completed: true
    }
  ]
}

const payload = {
  request: true,
  failure: false,
  fetch: initialState,
  create: { id: 2, title: 'Task 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: 'Task 107', completed: false },
  delete: 1
}

const actionTypeName = [
  TASK.FETCH.REQUEST,
  TASK.FETCH.FAILURE,
  TASK.FETCH.SUCCESS,
  TASK.CREATE.SUCCESS,
  TASK.UPDATE.SUCCESS,
  TASK.UPDATE.SUCCESS,
  TASK.DELETE.SUCCESS,
]

const expected_array = [
  loadingData,
  loadingData,
  fetchData,
  createData,
  updateData,
  updateData,
  deleteData,
]

const type = ['request','failure','fetch','create','completed','update','delete']

describe('Task Reducers', () => {
  for (let i = 0; i < actionTypeName.length; i++) {
    it('should Task Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = taskReducer(initialState, action)
      const expected = expected_array[i](initialState, action)
      expect(recieved).toEqual(expected)
    });
  }
});
