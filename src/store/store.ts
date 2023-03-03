import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import cardReducer from "./reducers/cards/index";
const rootReducers = combineReducers(cardReducer)

export const store = legacy_createStore(rootReducers, applyMiddleware())


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch