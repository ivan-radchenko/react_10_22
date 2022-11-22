import { createAction, createReducer } from "@reduxjs/toolkit";

export const initialState = {
    cash: 0,
}

export const add = createAction('add')
export const get = createAction('get')

export default createReducer(initialState, {
    [add]: function (state) {
        state.cash = state.cash + 1
    },
    [get]: function (state) {
        state.cash = state.cash - 1
    },
})
