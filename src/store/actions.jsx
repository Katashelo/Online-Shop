import { createAction } from "@reduxjs/toolkit";

export const addItemToMyFavorite = createAction("favorite/add")
export const removeItemFromMyFavorite = createAction("favorite/remove")
export const addItemToBusket = createAction("busket/add")
export const removeFromBusket = createAction("busket/remove")