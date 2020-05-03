const initialState = {
  usersdetails: [],
  isLoading: true,
}

const profileReducer = (state = initialState, action) => {
  console.log('myprofil', action.type)
  console.log(action)
  switch (action.type) {
    case 'GET_MY_PROFILE': {
      return {
        ...state,
        isLoading: false,
        usersdetails: action.payload,
      }
    }
    case 'UPDATE_PICTURE': {
      return {
        ...state,
        isLoading: false,
        usersdetails: action.payload,
      }
    }

    default:
      return state
  }
}

export default profileReducer
