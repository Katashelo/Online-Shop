export const PurchaseItemSelector = state => {
    console.log(state.changesModelItem , 'selecFav')
    return state.changesModelItem
}
export const OnPurchaseSelector = state => {
    console.log(state.busket, 'selecPur')
    return state.busket
}