const initialState = {
  singleData: {},
  usersdetails: [],
  isLoading: true,
  pageInfo: {},
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
    case 'GET_ALL_USERS': {
      return {
        ...state,
        usersdetails: action.payload,
      }
    }
    case 'UPDATE_PICTURE': {
      return {
        ...state,
        isLoading: false,
        // usersdetails: action.payload,
      }
    }
    case 'UPDATE_DATA': {
      return {
        ...state,
        singleData: action.payload,
      }
    }
    case 'MOVE_PAGE_USERS': {
      return {
        ...state,
        usersdetails: action.payload.data,
        pageInfo: action.payload.pageInfo,
      }
    }
    case 'SEARCH_DATA_USERS': {
      return {
        ...state,
        busses: action.payload,
      }
    }
    default:
      return state
  }
}

export default profileReducer
