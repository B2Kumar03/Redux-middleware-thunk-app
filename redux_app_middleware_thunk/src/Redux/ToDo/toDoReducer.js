import { ADD_DATA } from "./actionItem";
import { intialState } from "./initialState";

export const toDoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
