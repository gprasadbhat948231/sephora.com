import { reducer } from "./EyecareRedux/Reducer";
import {combineReducers,legacy_createStore,} from "redux"
const rootreducer=combineReducers({ItemAddreducer:reducer})
export const store=legacy_createStore(rootreducer)