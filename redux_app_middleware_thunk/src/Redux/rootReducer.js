import {combineReducers} from 'redux'
import { toDoReducer } from './ToDo/toDoReducer'
import { loadingReducer } from './Loading/loadingReducer'
import { errorReducer } from './Error/errorReducer'
import { themeReducer } from './Theme/themReducer'
export const rootReducer =combineReducers({
    todo:toDoReducer,
    loader:loadingReducer,
    error:errorReducer,
    theme:themeReducer
})