import { ERROR } from "./actionItem";
import { intialState } from "./initialState";

export const errorReducer=(state=intialState,action)=>{
    switch(action.type){
        case ERROR:
            return {...state,error:!state.error}
        default:
            return state
    }
}