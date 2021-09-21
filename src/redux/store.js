import {combineReducers, createStore} from "redux";
import formReducer from "./form-reducer";

const reducers = combineReducers({
    formReducer,
})

export const store = createStore(reducers)