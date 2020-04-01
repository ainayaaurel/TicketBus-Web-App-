const initialState = {
  shuttlebus = []
}

const rootReducer = (state = initialState, actions){
  switch(actions.type) {
    case 'DELETE_BUS': {
      const {shuttlebus} = state  
      shuttlebus.push(action.payload)
      return {
        ...state,
        shuttlebus
      }
    }
  }
}

// Store
const store = createStore(rootReducer);

// actions
export function getBus(){
  re
}