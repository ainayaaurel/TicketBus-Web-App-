const initialState = {
  isLogin: false,
  isLoading: false,
}

const loginReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'LOGIN_ADMIN': {
      return {
        ...state,
        isLoading: true,
        isLogin: action.payload.data,
      }
    }
    default:
      return state
  }
}

export default loginReducer