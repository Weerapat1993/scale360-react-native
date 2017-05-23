/**
 * LOADING CORE
 * @param {*} state
 * @param {boolean} bool
 * @return {*}
 */
export const loadingCore = (state, bool) => ({
  ...state,
  loading: bool
})

/**
 * CORE REQUEST
 * @param {*} state
 * @param {*} action
 */
export const coreRequest = (state, action) => (loadingCore(state, true))

/**
 * CORE FAILURE
 * @param {*} state
 * @param {*} action
 */
export const coreFailure = (state, action) => (loadingCore(state, false))


//=====================================
//  FETCH_CORE
//-------------------------------------

/**
 * FETCH API CORE SUCCESS
 * @param {*} state
 * @param {*} action
 * 
 */
export const fetchCoreSuccess = (state, action) => ({
  ...state,
  loading: false,
  data: action.payload
})

//=====================================
//  CREATE_CORE
//-------------------------------------

/**
 * CREATE NEW CORE SUCCESS
 * @param {*} state
 * @param {*} action
 */
export const createCoreSuccess = (state, action) => ({
  loading: false,
  data: [
    ...state.data,
    action.payload
  ]
})

//=====================================
//  UPDATE_CORE
//-------------------------------------

/**
 * UPDATE CORE SUCCESS (item.key)
 * @param {*} state
 * @param {*} action
 */
export const updateCoreSuccess = (state,action) => {
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
//  DELETE_CORE
//-------------------------------------

/**
 * DELETE CORE SUCCESS (item.key)
 * @param {*} state
 * @param {*} action
 */
export const deleteCoreSuccess = (state,action) => ({
  loading: false,
  data: state.data.filter((item) => action.payload !== item.id)
})