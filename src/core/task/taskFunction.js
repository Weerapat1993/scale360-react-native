/**
 * FETCH API DATA
 * @param {*} state
 * @param {*} action
 */
export const fetchTaskSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    data: action.payload
  }
}
