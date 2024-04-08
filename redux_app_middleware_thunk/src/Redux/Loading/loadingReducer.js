import { IS_LOADING } from "./actionItem"
import { intialState } from "./initialState"

export const loadingReducer=(state=intialState,action)=>{
    switch(action.type){
        case IS_LOADING:
            return {...state,loader:!state.loader}  
        default:
            return state
    }
}