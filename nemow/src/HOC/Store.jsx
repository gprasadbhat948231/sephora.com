import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./EyecareRedux/Reducer";
import thunk from "redux-thunk"
export const store=legacy_createStore(reducer,applyMiddleware(thunk))
import {combineReducers,legacy_createStore,} from "redux"
const rootreducer=combineReducers({ItemAddreducer:reducer})
export const store=legacy_createStore(rootreducer)
