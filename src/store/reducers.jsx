import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addItemToBusket, addItemToMyFavorite, removeFromBusket, removeItemFromMyFavorite } from "./actions";

export const PurchaseReducer = createReducer( initialState, (builder) => {
    builder
    .addCase(addItemToMyFavorite, (state, action) => {
        if (!state.changesModelItem.find((item) => item.id === action.payload.id)) {
            state.changesModelItem = [...state.changesModelItem, action.payload]
        }
    })
    .addCase(removeItemFromMyFavorite, (state, action) => {
       state.changesModelItem = state.changesModelItem.filter( (item) => item.id !==action.payload )
    })
    .addCase(addItemToBusket, (state, action) => {
        if (!state.busket.find((item) => item.id === action.payload.id)) {
            state.busket = [...state.busket, action.payload]
        }
    })
    .addCase(removeFromBusket, (state, action) => {
        state.busket = state.busket.filter( (item) => item.id !==action.payload )
    }) 
} )