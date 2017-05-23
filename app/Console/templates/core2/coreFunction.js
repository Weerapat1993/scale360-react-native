/**
 * LOADING ${name_upper}
 * @param {*} state
 * @param {boolean} bool
 * @return {*}
 */
export const loading${name_pascal} = (state, bool) => ({
  ...state,
  loading: bool
})

/**
 * ${name_upper} REQUEST
 * @param {*} state
 * @param {*} action
 */
export const ${name}Request = (state, action) => (loading${name_pascal}(state, true))

/**
 * ${name_upper} FAILURE
 * @param {*} state
 * @param {*} action
 */
export const ${name}Failure = (state, action) => (loading${name_pascal}(state, false))


//=====================================
//  FETCH_${name_upper}
//-------------------------------------

/**
 * FETCH API ${name_upper} SUCCESS
 * @param {*} state
 * @param {*} action
 * 
 */
export const fetch${name_pascal}Success = (state, action) => ({
  ...state,
  loading: false,
  data: action.payload
})

//=====================================
//  CREATE_${name_upper}
//-------------------------------------

/**
 * CREATE NEW ${name_upper} SUCCESS
 * @param {*} state
 * @param {*} action
 */
export const create${name_pascal}Success = (state, action) => ({
  loading: false,
  data: [
    ...state.data,
    action.payload
  ]
})

//=====================================
//  UPDATE_${name_upper}
//-------------------------------------

/**
 * UPDATE ${name_upper} SUCCESS (item.key)
 * @param {*} state
 * @param {*} action
 */
export const update${name_pascal}Success = (state,action) => {
  let news = state.data.filter((item) => action.payload.id === item.id)
  let newData = Object.assign({}, news[0], action.payload)
  let newState = state.data
  newState.forEach((item,i) => {
    if(newData.id === item.id){
      newState[i] = newData
    }
  })
  return {
    loading: false,
    data: newState
  };
}

//=====================================
//  DELETE_${name_upper}
//-------------------------------------

/**
 * DELETE ${name_upper} SUCCESS (item.key)
 * @param {*} state
 * @param {*} action
 */
export const delete${name_pascal}Success = (state,action) => ({
  loading: false,
  data: state.data.filter((item) => action.payload !== item.id)
})