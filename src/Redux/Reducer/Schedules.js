const initialState = {
  schedules: [],
  isLoading: true,
  singleData: {},
  pageInfo: {}

}

const schedulesReducer = (state = initialState, action) => {
  console.log('inireducer', action.type)
  switch (action.type) {
    case 'GET_SCHEDULES': {
      return {
        ...state,
        isLoading: false,
        schedules: action.payload.data,
        pageInfo: action.payload.pageInfo
      }
    } case 'POST_SCHEDULES': {
      return {
        ...state,
        isLoading: false,
        schedules: action.payload
      }
    } case 'UPDATE_SCHEDULES': {
      return {
        ...state,
        isLoading: false,
        schedules: action.payload

      }
    } case 'GET_SCHEDULES_BY_ID': {
      return {
        ...state,
        isLoading: false,
        singleData: action.payload
      }
    } case 'SEARCH_DATA_SCHEDULES': {
      return {
        ...state,
        schedules: action.payload
      }
    } case 'MOVE_PAGE_SCHEDULES': {
      return {
        ...state,
        schedules: action.payload.data,
        pageInfo: action.payload.pageInfo
      }
    }
    default:
      return state
  }
}

export default schedulesReducer

