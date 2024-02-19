import React, { useState } from "react";
import "./Header.css"
import ModalWindow from "../ModalWindow.jsx/ModalWindow";
import { Link } from "react-router-dom";

const Header = () => {

    const [modalLoginIsOpen, setModalLoginOpen] = useState(false)

    return <div className='header'>
      
            <Link to="/" className="navigate" > Name </Link>
            <Link to="/Busket" className="navigate" > Busket </Link>
            <Link to="/Favorite" className="navigate" >My Favorite</Link>

        <div className="main">
            <div className="section">
                <button className="modal-show-button"
                    onClick={() => setModalLoginOpen(true)}>
                    Login
                </button>
            </div>
        </div>
        <ModalWindow isOpen={modalLoginIsOpen} onClose={() => setModalLoginOpen(false)} login />

    </div>
}

export default Header;