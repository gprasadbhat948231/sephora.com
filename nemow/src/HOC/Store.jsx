import { reducer } from "./EyecareRedux/Reducer";
import {combineReducer,legacy_createStore,} from "redux"
const rootreducer=combineReducer({ItemAddreducer:reducer})
export const store=legacy_createStore(rootreducer)


