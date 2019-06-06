const initialState = {
    history:[]
}
const createReducer = (state=initialState,action) => {
    
      switch(action.type)
      {
         case "CREATE_PROJECT":
           return {...state,history:[...state.history,action.payload]}
           default:
           return state
      }
  
}

export default createReducer;