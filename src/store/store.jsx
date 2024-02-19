import { configureStore } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { PurchaseReducer } from "./reducers";


export const store = configureStore({
    reducer:  PurchaseReducer,
    initialState: initialState
})