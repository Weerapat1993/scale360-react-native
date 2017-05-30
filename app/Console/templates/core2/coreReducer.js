// import { ${name_upper} } from '../constants'
import { ${name_upper} } from './${name}ActionTypes'
import { ${name}Request, ${name}Failure, fetch${name_pascal}Success, create${name_pascal}Success, update${name_pascal}Success, delete${name_pascal}Success } from './${name}Function'

export const initialState = {
  data: [],
  loading: true
};

export const ${name}Reducer = (state = initialState, action) => {
  if(action === undefined) return state
  switch (action.type) {
    case ${name_upper}.FETCH.REQUEST:
    case ${name_upper}.CREATE.REQUEST:
    case ${name_upper}.UPDATE.REQUEST:
    case ${name_upper}.DELETE.REQUEST:
      return ${name}Request(state, action)
    case ${name_upper}.FETCH.FAILURE:
    case ${name_upper}.CREATE.FAILURE:
    case ${name_upper}.UPDATE.FAILURE:
    case ${name_upper}.DELETE.FAILURE:
      return ${name}Failure(state, action)
    // FETCH_${name_upper}_SUCCESS: ================================
    case ${name_upper}.FETCH.SUCCESS:
      return fetch${name_pascal}Success(state, action)
    // CREATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.CREATE.SUCCESS:
      return create${name_pascal}Success(state, action)
    // UPDATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.UPDATE.SUCCESS:
      return update${name_pascal}Success(state, action)
    // CREATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.DELETE.SUCCESS:
      return delete${name_pascal}Success(state, action)
    // DEFAULT: ================================
    default:
      return state
  }
}
