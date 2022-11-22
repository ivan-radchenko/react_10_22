import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cashReducer from "./cashReducer";

const rootReducer = combineReducers({
    cash: cashReducer
})

export const store = configureStore({
    reducer: rootReducer,
})