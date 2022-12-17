// import thunk from "redux-thunk";
import { reducer } from "./EyecareRedux/Reducer";
import { legacy_createStore,compose, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./AdminRedux/product.reducer";
const rootReducer=combineReducers({
    adminManager:productReducer,
    reducer:reducer,
    // authManeger:authReducer
    })
    const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
    // const rootreducer=combineReducers({ItemAddreducer:reducer})
    export const store = legacy_createStore(rootReducer,composer())
