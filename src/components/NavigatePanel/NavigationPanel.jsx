import React, { useState } from "react";

const NavigationPanel = () => {
    const [isOpen, setOpen] = useState(false);
    const [isOpenSort, setOpenSort] = useState(false);
    return (
        <div className="wrapper" >
            <input className="search" placeholder="Search products for name" ></input>
            <div className="header" >
                <button className="drop-down" onClick={() => setOpen(!isOpen)} >
                    Choose Category
                </button>
                <nav className={`menu ${isOpen ? "active" : ""}`} >
                    <ul className="menu__list" >
                        <li className="menu__item" >
                            <span> Trainners </span>
                        </li>
                        <li className="menu__item" >
                            <span> Classic Shoes </span>
                        </li>
                        <li className="menu__item" >
                            <span> Sandals </span>
                        </li>

                    </ul>
                </nav>
            </div>
            <div className="header" >
                <button className="drop-down" onClick={() => setOpenSort(!isOpenSort)} >
                    Sort
                </button>
                <nav className={`menu ${isOpenSort ? "active" : ""}`} >
                    <ul className="menu__list" >
                        <li className="menu__item" >
                            <span> Price </span>
                        </li>
                        <li className="menu__item" >
                            <span> Popular </span>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
export default NavigationPanel;