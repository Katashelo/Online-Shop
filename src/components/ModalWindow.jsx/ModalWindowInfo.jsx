import React from "react";
import { Transition } from "react-transition-group";
import "./ModalWindow.css";

const ModalWindowInfo = ({ isOpen, onClose, items }) => {

    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose();
    };
    return (
        <>
            <Transition animation={false} in={isOpen} timeout={350} unmountOnExit={true}>
                {(state) => (
                    <div className={`modal modal--${state}`}>
                        <div className="modal-wrapper" onClick={onWrapperClick}>
                            <div className="modal-content">
                                <button
                                    className="modal-close-button"
                                    onClick={() => onClose()}
                                >
                                    X
                                </button>
                               <div className="info_of_item" >
                               <div> {items.title} </div>
                                <img src={items.image} alt="alt" className="img_modal" />
                                <div> Price: {items.price}$ </div>
                                <div> Rate: {items.rating.rate} </div>
                                <div> Count: {items.rating.count} </div>
                               </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};

export default ModalWindowInfo;
