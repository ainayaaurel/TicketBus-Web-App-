const initialState = {
  busses: [],
  pageInfo: {},
  isLoading: true
  //showModal: false
}

const busReducer = (state = initialState, action) => {
  console.log('ingg', action.type)
  console.log(action)
  switch (action.type) {

    case 'GET_BUS': {

      return {
        ...state,
        isLoading: false,
        busses: action.payload.data,
        pageInfo: action.payload.pageInfo
      }
    } case 'POST_BUS': {
      return {
        ...state,
        isLoading: false,
        busses: action.payload
      }
    } case 'UPDATE_BUS': {
      return {
        ...state,
        isLoading: false,
        busses: action.payload

      }
    } case 'GET_BUS_BY_ID': {
      return {
        ...state,
        isLoading: false,
        busses: action.payload
      }
    } case 'SEARCH_DATA_BUSSES': {
      return {
        ...state,
        busses: action.payload
      }
    } case 'MOVE_PAGE_BUSSES': {
      return {
        ...state,
        busses: action.payload.data,
        pageInfo: action.payload.pageInfo
      }
    }
    default:
      return state
  }
}

export default busReducer

// case 'GET_ALL_DATA_BUSSES':
    //   return {
    //     ...state,
    //     busses: action.payload
    //   }
    // case 'DELETE_BUS':
    //   return {
    //     ...state,
    //     busses: action.payload
    //   }
    // case 'UPDATE_DATA':
    //   return {
    //     ...state,
    //     busses: action.payload
    //   }
    // case 'SEARCH_BUS':
    //   return {
    //     ...state,
    //     busses: action.payload
    //   }