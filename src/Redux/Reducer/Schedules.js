const initialState = {
  schedules: [],
  isLoading: true,
  singleData: {}

}

const schedulesReducer = (state = initialState, action) => {
  console.log('inireducer', action.type)
  switch (action.type) {
    case 'GET_SCHEDULES': {
      return {
        ...state,
        isLoading: false,
        schedules: action.payload
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
    }
    default:
      return state
  }
}

export default schedulesReducer

