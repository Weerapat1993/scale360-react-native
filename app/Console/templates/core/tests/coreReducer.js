// import { ${name_upper} } from '../../constants';
import { ${name_upper} } from '../${name}ActionTypes';
import { initialState, ${name}Reducer } from '../${name}Reducer'
import { ${name}Request, ${name}Failure, fetch${name_pascal}Success, create${name_pascal}Success, update${name_pascal}Success, delete${name_pascal}Success } from '../${name}Function'

const defaultState = {
  loading: false,
  data: [
    {
      id: 1,
      title: '${name_pascal} 101',
      completed: true
    }
  ]
}

const payload = {
  fetch: initialState,
  create: { id: 2, title: '${name_pascal} 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: '${name_pascal} 107', completed: false },
  delete: 1
}

const actionTypeName = [
  ${name_upper}.FETCH.SUCCESS,
  ${name_upper}.CREATE.SUCCESS,
  ${name_upper}.UPDATE.SUCCESS,
  ${name_upper}.UPDATE.SUCCESS,
  ${name_upper}.DELETE.SUCCESS,
]

const expected_array = [
  fetch${name_pascal}Success, 
  create${name_pascal}Success, 
  update${name_pascal}Success, 
  update${name_pascal}Success, 
  delete${name_pascal}Success,
]

const actionTypeName2 = [
  ${name_upper}.FETCH.REQUEST,
  ${name_upper}.CREATE.REQUEST,
  ${name_upper}.UPDATE.REQUEST,
  ${name_upper}.UPDATE.REQUEST,
  ${name_upper}.DELETE.REQUEST,
  ${name_upper}.FETCH.FAILURE,
  ${name_upper}.CREATE.FAILURE,
  ${name_upper}.UPDATE.FAILURE,
  ${name_upper}.UPDATE.FAILURE,
  ${name_upper}.DELETE.FAILURE,
]

const expected_array2 = [
  ${name}Request,
  ${name}Request,
  ${name}Request,
  ${name}Request,
  ${name}Request,
  ${name}Failure,
  ${name}Failure,
  ${name}Failure,
  ${name}Failure,
  ${name}Failure,
]

const type = ['fetch','create','completed','update','delete']

describe('${name_pascal} Reducers', () => {
  it('should ${name_pascal} Reducer : initialState', () => {
    const recieved = ${name}Reducer(undefined, undefined)
    const expected = initialState
    expect(recieved).toEqual(expected)
  });

  for (let i = 0; i < actionTypeName.length; i++) {
    it('should ${name_pascal} Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = ${name}Reducer(defaultState, action)
      const expected = expected_array[i](defaultState, action)
      expect(recieved).toEqual(expected)
    });
  }

  for (let i = 0; i < actionTypeName2.length; i++) {
    it('should ${name_pascal} Reducer : '+actionTypeName2[i], () => {
      const action = {
        type: actionTypeName2[i],
      }
      const recieved = ${name}Reducer(defaultState, action)
      const expected = expected_array2[i](defaultState, action)
      expect(recieved).toEqual(expected)
    });
  }
  it('should ${name_pascal} Reducer : ETC', () => {
    const action = {
      type: 'ETC',
    }
    const recieved = ${name}Reducer(defaultState, action)
    const expected = defaultState
    expect(recieved).toEqual(expected)
  });
});
