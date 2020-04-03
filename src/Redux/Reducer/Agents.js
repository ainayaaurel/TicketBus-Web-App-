const initialState = {
  agents: [],
  isLoading: true
  //showModal: false
}

const agentsReducer = (state = initialState, action) => {
  console.log('ingg', action.type)
  console.log(action)
  switch (action.type) {
    case 'GET_AGENTS': {
      return {
        ...state,
        isLoading: false,
        agents: action.payload
      }
    } case 'POST_AGENTS': {
      return {
        ...state,
        isLoading: false,
        agents: action.payload
      }
    } case 'UPDATE_AGENTS': {
      return {
        ...state,
        isLoading: false,
        agents: action.payload

      }
    } case 'GET_AGENTS_BY_ID': {
      return {
        ...state,
        isLoading: false,
        agents: action.payload
      }
    }
    default:
      return state
  }
}

export default agentsReducer