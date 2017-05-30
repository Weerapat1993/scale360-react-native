import { API } from '../constants'
import { fetchActions, payloadActions } from '../../utils'
import { ${name_upper} } from './${name}ActionTypes'

// FETCH_${name_upper}
export const fetch${name_pascal} = () => fetchActions({
  type: ${name_upper}.FETCH,
  API: API.${name_upper}
})

// CREATE_${name_upper}
export const create${name_pascal} = (payload) => payloadActions({
  type: ${name_upper}.CREATE,
  payload
})

// UPDATE_${name_upper}
export const update${name_pascal} = (payload) => payloadActions({
  type: ${name_upper}.UPDATE,
  payload
})

// DELETE_${name_upper}
export const delete${name_pascal} = (payload) => payloadActions({
  type: ${name_upper}.DELETE,
  payload
})

// export const fetch${name_pascal} = () => (dispatch, getState) => {
//   dispatch(actionRequest(true, 'FETCH_${name_upper}_REQUEST'))
//   fetch(API.${name_upper})
//     .then(res => res.json())
//     .then(res => dispatch(actionSuccess(res, 'FETCH_${name_upper}_SUCCESS')))
//     .catch(error => dispatch(actionFailure(false, 'FETCH_${name_upper}_FAILURE', error)))
// }
