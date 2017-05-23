// import { CORE } from '../../constants';
import { CORE } from '../coreActionTypes';
import { initialState, coreReducer } from '../coreReducer'
import { coreRequest, coreFailure, fetchCoreSuccess, createCoreSuccess, updateCoreSuccess, deleteCoreSuccess } from '../coreFunction'

const defaultState = {
  loading: false,
  data: [
    {
      id: 1,
      title: 'Core 101',
      completed: true
    }
  ]
}

const payload = {
  fetch: initialState,
  create: { id: 2, title: 'Core 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: 'Core 107', completed: false },
  delete: 1
}

const actionTypeName = [
  CORE.FETCH.SUCCESS,
  CORE.CREATE.SUCCESS,
  CORE.UPDATE.SUCCESS,
  CORE.UPDATE.SUCCESS,
  CORE.DELETE.SUCCESS,
]

const expected_array = [
  fetchCoreSuccess, 
  createCoreSuccess, 
  updateCoreSuccess, 
  updateCoreSuccess, 
  deleteCoreSuccess,
]

const actionTypeName2 = [
  CORE.FETCH.REQUEST,
  CORE.CREATE.REQUEST,
  CORE.UPDATE.REQUEST,
  CORE.UPDATE.REQUEST,
  CORE.DELETE.REQUEST,
  CORE.FETCH.FAILURE,
  CORE.CREATE.FAILURE,
  CORE.UPDATE.FAILURE,
  CORE.UPDATE.FAILURE,
  CORE.DELETE.FAILURE,
]

const expected_array2 = [
  coreRequest,
  coreRequest,
  coreRequest,
  coreRequest,
  coreRequest,
  coreFailure,
  coreFailure,
  coreFailure,
  coreFailure,
  coreFailure,
]

const type = ['fetch','create','completed','update','delete']

describe('Core Reducers', () => {
  it('should Core Reducer : initialState', () => {
    const recieved = coreReducer(undefined, undefined)
    const expected = initialState
    expect(recieved).toEqual(expected)
  });

  for (let i = 0; i < actionTypeName.length; i++) {
    it('should Core Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = coreReducer(defaultState, action)
      const expected = expected_array[i](defaultState, action)
      expect(recieved).toEqual(expected)
    });
  }

  for (let i = 0; i < actionTypeName2.length; i++) {
    it('should Core Reducer : '+actionTypeName2[i], () => {
      const action = {
        type: actionTypeName2[i],
      }
      const recieved = coreReducer(defaultState, action)
      const expected = expected_array2[i](defaultState, action)
      expect(recieved).toEqual(expected)
    });
  }
  it('should Core Reducer : ETC', () => {
    const action = {
      type: 'ETC',
    }
    const recieved = coreReducer(defaultState, action)
    const expected = defaultState
    expect(recieved).toEqual(expected)
  });
});
