const initialState = {
  agents: [],
  isLoading: true,
  pageInfo: {}
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
        agents: action.payload.data,
        pageInfo: action.payload.pageInfo
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
    } case 'SEARCH_DATA_AGENTS': {
      return {
        ...state,
        agents: action.payload
      }
    } case 'MOVE_PAGE_AGENTS': {
      return {
        ...state,
        agents: action.payload.data,
        pageInfo: action.payload.pageInfo
      }
    }
    default:
      return state
  }
}

export default agentsReducer