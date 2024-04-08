
import { THEME } from "./actionItem";
import { intialState } from "./initialState";

export const themeReducer=(state=intialState,action)=>{
  
    switch(action.type){
        case THEME:
           
            return {...state,mode : action.payload}
    default:
        return state
}
}