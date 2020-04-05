const initialState = {
  routes: [],
  isLoading: true,
  singleData: {},
  pageInfo: {},
  //showModal: false
}

const routesReducer = (state = initialState, action) => {
  console.log('ingg', action.type)
  console.log(action)
  switch (action.type) {
    case 'GET_ROUTES': {
      return {
        ...state,
        isLoading: false,
        routes: action.payload.data,
        pageInfo: action.payload.pageInfo
      }
    } case 'POST_ROUTES': {
      return {
        ...state,
        isLoading: false,

      }
    } case 'UPDATE_ROUTES': {
      return {
        ...state,
        isLoading: false,
        routes: action.payload

      }
    } case 'GET_ROUTES_BY_ID': {
      return {
        ...state,
        isLoading: false,
        singleData: action.payload
      }
    } case 'SEARCH_DATA_ROUTES': {
      return {
        ...state,
        routes: action.payload
      }
    } case 'MOVE_PAGE_ROUTES': {
      return {
        ...state,
        routes: action.payload.data,
        pageInfo: action.payload.pageInfo
      }
    }
    default:
      return state
  }
}

export default routesReducer