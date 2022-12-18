import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./EyecareRedux/Reducer";
import thunk from "redux-thunk"
const rootreducer=combineReducers({
CartandWishReducer:reducer
})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
// import {combineReducers,legacy_createStore,} from "redux"
// const rootreducer=combineReducers({ItemAddreducer:reducer})
// export const store=legacy_createStore(rootreducer)

