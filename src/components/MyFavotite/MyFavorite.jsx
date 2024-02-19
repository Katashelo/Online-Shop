import React from "react";
import BlockItems from "../BlockItems/BlockItems";
import { useDispatch, useSelector } from "react-redux";
import { PurchaseItemSelector } from "../../store/selectors";
import { addItemToBusket, removeItemFromMyFavorite } from "../../store/actions";
import "./MyFavorite.css"

const Favorite = (props) => {
    const purchaseItems = useSelector(PurchaseItemSelector)
    const dispatch = useDispatch()
    const handleRemoveFavorite = (id) => {
        dispatch(removeItemFromMyFavorite(id))
    }
    const handleAddToBusketFromFavorite = (item) => {
        dispatch(addItemToBusket(item))
    }

    return purchaseItems.length ? (
        <div className="favorite_block" >
            {purchaseItems.map(item => (
                <div key={item.id}>
                    <BlockItems
                        items={item}
                        isFavorite
                        removeItemFromMyFavorite={handleRemoveFavorite}
                        addBusket={handleAddToBusketFromFavorite}
                    />
                </div>
            ))}
        </div>
    ) : <div> Add your favorite </div>
}

export default Favorite;