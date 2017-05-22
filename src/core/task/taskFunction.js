/**
 * LOADING TASK
 * @param {*} state
 * @param {boolean} bool
 * @return {*}
 */
export const loadingTask = (state, bool) => ({
  ...state,
  loading: bool
})

/**
 * TASK REQUEST
 * @param {*} state
 * @param {*} action
 */
export const taskRequest = (state, action) => (loadingTask(state, true))

/**
 * TASK FAILURE
 * @param {*} state
 * @param {*} action
 */
export const taskFailure = (state, action) => (loadingTask(state, false))


//=====================================
//  FETCH_TASK
//-------------------------------------

/**
 * FETCH API TASK SUCCESS
 * @param {*} state
 * @param {*} action
 * 
 */
export const fetchTaskSuccess = (state, action) => ({
  ...state,
  loading: false,
  data: action.payload
})

//=====================================
//  CREATE_TASK
//-------------------------------------

/**
 * CREATE NEW TASK SUCCESS
 * @param {*} state
 * @param {*} action
 */
export const createTaskSuccess = (state, action) => ({
  loading: false,
  data: [
    ...state.data,
    action.payload
  ]
})

//=====================================
//  UPDATE_TASK
//-------------------------------------

/**
 * UPDATE TASK SUCCESS (item.key)
 * @param {*} state
 * @param {*} action
 */
export const updateTaskSuccess = (state,action) => {
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
//  DELETE_TASK
//-------------------------------------

/**
 * DELETE TASK SUCCESS (item.key)
 * @param {*} state
 * @param {*} action
 */
export const deleteTaskSuccess = (state,action) => ({
  loading: false,
  data: state.data.filter((item) => action.payload !== item.id)
})