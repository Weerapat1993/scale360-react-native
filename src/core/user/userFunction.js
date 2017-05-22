
export const loginUserRequest = (state, action) => ({
  ...state,
  loading: true,
  login: false,
  error: null
})

export const loginUserSuccess = (state, action) => ({
  data: action.payload.data,
  loading: false,
  error: action.payload.error.message,
  login: true,
})

export const loginUserFailure = (state, action) => ({
  ...state,
  loading: false,
  error: action.error.message,
  login: true,
})