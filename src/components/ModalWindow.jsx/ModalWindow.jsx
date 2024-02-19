import React from "react";
import { Transition } from "react-transition-group";
import "./ModalWindow.css";
import Forms from "../Forms/Forms";

const ModalWindow = ({ isOpen, onClose }) => {

    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose();
    };
    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
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
                                <Forms isLogin={true} />


                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};

export default ModalWindow;
