
export const loginUserRequest = (state, action) => {
  return {
    ...state,
    loading: true,
    login: false,
    error: null
  }
} 

export const loginUserSuccess = (state, action) => {
  if(action.data.code === 200) {
    return {
      data: action.data.data,
      loading: false,
      error: action.data.error.message,
      login: true,
    }
  } else {
    return {
      data: action.data.data,
      loading: false,
      error: action.data.error.message,
      login: true,
    }
  }
} 

export const loginUserFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error.message,
    login: true,
  }
} 