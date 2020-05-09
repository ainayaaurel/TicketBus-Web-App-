const initialState = {
  reservations: [],
  pageInfo: {},
  isLoading: true,
}

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_RESERVATIONS': {
      return {
        ...state,
        isLoading: false,
        reservations: action.payload.data,
        pageInfo: action.payload.pageInfo,
      }
    }

    default:
      return state
  }
}

export default reservationReducer
