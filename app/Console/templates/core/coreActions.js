import { API } from '../constants'
import { ${name_upper} } from './${name}ActionTypes'
import { asyncActions, payloadActions } from '../../utils'
// import axios from 'axios'

// export const fetch${name_pascal}Request = (type) => ({ type })
// export const fetch${name_pascal}Success = (payload, type) => ({ payload, type })
// export const fetch${name_pascal}Failure = (error, type) => ({ error, type })

// export const fetch${name_pascal} = () => (dispatch, getState) => {
//   dispatch(fetch${name_pascal}Request(${name_upper}.FETCH.REQUEST))
//   return axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
//     .then(res => dispatch(fetch${name_pascal}Success(res.data, ${name_upper}.FETCH.SUCCESS)))
//     .catch(error => dispatch(fetch${name_pascal}Failure(error, ${name_upper}.FETCH.FAILURE)))
// }


export const fetch${name_pascal} = () => asyncActions({
  type: ${name_upper}.FETCH,
  API: 'https://jsonplaceholder.typicode.com/todos?userId=1'
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

// export const create${name_pascal}Request = (type) => ({ type })
// export const create${name_pascal}Success = (payload, type) => ({ payload, type })
// export const create${name_pascal}Failure = (error, type) => ({ error, type })

// CREATE_${name_upper}
// export const create${name_pascal} = (payload) => (dispatch, getState) => {
//   dispatch(create${name_pascal}Request(${name_upper}.CREATE.REQUEST))
//   dispatch(create${name_pascal}Success(payload, ${name_upper}.CREATE.SUCCESS))
// }


// export const update${name_pascal}Request = (type) => ({ type })
// export const update${name_pascal}Success = (payload, type) => ({ payload, type })
// export const update${name_pascal}Failure = (error, type) => ({ error, type })

// UPDATE_${name_upper}
// export const update${name_pascal} = (payload) => (dispatch, getState) => {
//   dispatch(update${name_pascal}Request(${name_upper}.UPDATE.REQUEST))
//   dispatch(update${name_pascal}Success(payload, ${name_upper}.UPDATE.SUCCESS))
// }

// export const delete${name_pascal}Request = (type) => ({ type })
// export const delete${name_pascal}Success = (payload, type) => ({ payload, type })
// export const delete${name_pascal}Failure = (error, type) => ({ error, type })

// // DELETE_${name_upper}
// export const delete${name_pascal} = (payload) => (dispatch, getState) => {
//   dispatch(delete${name_pascal}Request(${name_upper}.DELETE.REQUEST))
//   dispatch(delete${name_pascal}Success(payload, ${name_upper}.DELETE.SUCCESS))
// }
