import React from "react";
import BlockItems from "../BlockItems/BlockItems";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBusket } from "../../store/actions";
import { OnPurchaseSelector } from "../../store/selectors";
import "./Busket.css"

const Busket = () => {
    const purchaseItems = useSelector(OnPurchaseSelector)
    const dispatch = useDispatch()
    const handleRemoveFromBusket = (id) => {
        dispatch(removeFromBusket(id))
    }

    return purchaseItems.length ? (
        <div className="busket_block" >
            {purchaseItems.map(item => (
                <div key={item.id} >
                    <BlockItems
                        items={item}
                        removeFromBusket={handleRemoveFromBusket}
                        isBasket
                    />
                </div>
            ))}
        </div>
    )
        : 'Add your purchase'
}

export default Busket;