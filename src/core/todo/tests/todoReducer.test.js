// import { TODO } from '../../constants';
import { TODO } from '../todoActionTypes';
import { todoReducer } from '../todoReducer'
import { loadingData, fetchData, createData, updateData, deleteData } from '../../../utils'

const initialState = {
  loading: false,
  data: [
    {
      id: 1,
      title: 'Todo 101',
      completed: true
    }
  ]
}

const payload = {
  request: true,
  failure: false,
  fetch: initialState,
  create: { id: 2, title: 'Todo 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: 'Todo 107', completed: false },
  delete: 1
}

const actionTypeName = [
  TODO.FETCH.REQUEST,
  TODO.FETCH.FAILURE,
  TODO.FETCH.SUCCESS,
  TODO.CREATE.SUCCESS,
  TODO.UPDATE.SUCCESS,
  TODO.UPDATE.SUCCESS,
  TODO.DELETE.SUCCESS,
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

describe('Todo Reducers', () => {
  for (let i = 0; i < actionTypeName.length; i++) {
    it('should Todo Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = todoReducer(initialState, action)
      const expected = expected_array[i](initialState, action)
      expect(recieved).toEqual(expected)
    });
  }
});
