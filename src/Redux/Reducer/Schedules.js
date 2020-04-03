const initialState = {
  schedules: [],
  isLoading: true
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
    }
    default:
      return state
  }
}

export default schedulesReducer

