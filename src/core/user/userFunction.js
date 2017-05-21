
export const loginUserRequest = (state, action) => {
  return {
    ...state,
    loading: true,
    login: false,
  }
} 

export const loginUserSuccess = (state, action) => {
  if(action.code === 200) {
    return {
      data: action.data,
      loading: false,
      error: null,
      login: true,
    }
  } else {
    return {
      data: action.data,
      loading: false,
      error: action.error,
      login: true,
    }
  }
} 

export const loginUserFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error.message,
    login: false,
  }
} 