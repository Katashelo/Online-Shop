import React, { useState } from "react";
import "./BlockItems.css"
import ModalWindowInfo from "../ModalWindow.jsx/ModalWindowInfo";

const BlockItems = ({ items,
    addFavorite,
    addBusket,
    removeItemFromMyFavorite,
    removeFromBusket,
    isFavorite = false,
    isBasket = false }) => {

    const [modalInfoIsOpen, setModalInfoOpen] = useState(false)

    const handleAddFavorite = () => {
        addFavorite(items)

    }
    const handleRemoveFavorite = () => {
        removeItemFromMyFavorite(items.id)
    }
    const handleAddToBusket = () => {
        addBusket(items)
    }
    const handleRemoveFromBusket = () => {
        removeFromBusket(items.id)
    }

    return (<div className="border_block" >
        <div onClick={ () => setModalInfoOpen(true) } className="body_block" >


            <div key={items.id} className="body_block_item">

                <img src={items.image} className="img" alt="alt" />
                <div >
                    {items.price}$ </div>
                <div className="buttons_block" >
                    <div onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite} className="buttons">
                        {isFavorite ? "X" : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" className="img_icon" alt="alt" />}
                    </div>
                    <div onClick={isBasket ? handleRemoveFromBusket : handleAddToBusket} className="buttons">
                        {isBasket ? "Видалити" : "Купити"}
                    </div>
                </div>
            </div>


        </div>
        <ModalWindowInfo isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)} items={items} />
    </div>)
}

export default BlockItems