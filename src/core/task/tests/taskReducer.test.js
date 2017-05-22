// import { TASK } from '../../constants';
import { TASK } from '../taskActionTypes';
import { taskReducer } from '../taskReducer'
import { taskRequest, taskFailure, fetchTaskSuccess, createTaskSuccess, updateTaskSuccess, deleteTaskSuccess } from '../taskFunction'

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
  fetch: initialState,
  create: { id: 2, title: 'Task 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: 'Task 107', completed: false },
  delete: 1
}

const actionTypeName = [
  TASK.FETCH.SUCCESS,
  TASK.CREATE.SUCCESS,
  TASK.UPDATE.SUCCESS,
  TASK.UPDATE.SUCCESS,
  TASK.DELETE.SUCCESS,
]

const expected_array = [
  fetchTaskSuccess, 
  createTaskSuccess, 
  updateTaskSuccess, 
  updateTaskSuccess, 
  deleteTaskSuccess,
]

const actionTypeName2 = [
  TASK.FETCH.REQUEST,
  TASK.CREATE.REQUEST,
  TASK.UPDATE.REQUEST,
  TASK.UPDATE.REQUEST,
  TASK.DELETE.REQUEST,
  TASK.FETCH.FAILURE,
  TASK.CREATE.FAILURE,
  TASK.UPDATE.FAILURE,
  TASK.UPDATE.FAILURE,
  TASK.DELETE.FAILURE,
]

const expected_array2 = [
  taskRequest,
  taskRequest,
  taskRequest,
  taskRequest,
  taskRequest,
  taskFailure,
  taskFailure,
  taskFailure,
  taskFailure,
  taskFailure,
]

const type = ['fetch','create','completed','update','delete']

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

  for (let i = 0; i < actionTypeName2.length; i++) {
    it('should Task Reducer : '+actionTypeName2[i], () => {
      const action = {
        type: actionTypeName2[i],
      }
      const recieved = taskReducer(initialState, action)
      const expected = expected_array2[i](initialState, action)
      expect(recieved).toEqual(expected)
    });
  }
});
