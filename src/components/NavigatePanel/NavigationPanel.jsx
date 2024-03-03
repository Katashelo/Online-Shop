import React, { useState } from "react";
import useFetchItems from "../../API/useFetchItems";
import { Link } from "react-router-dom";

const NavigationPanel = ({searchUrl}) => {
    const [isOpen, setOpen] = useState(false);
    const [isOpenSort, setOpenSort] = useState(false);
    const [categorie, setCategorie] = useState('')
  
    // const { item, error, isLoaded } = useFetchItems(categorie)

    // const handleTrainers = () => {
    //     setCategorie('https://fakestoreapi.com/products/category/jewelery')
    // }

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
                            <Link to={'/Categories'} style={{textDecoration: 'none', color: 'grey'}} > 
                          <div onClick={() => searchUrl('jewelery')} > Jewelery  </div>  
                            </Link>
                        </li>
                        <li className="menu__item" >
                        <Link to={'/Categories'} style={{textDecoration: 'none', color: 'grey'}} > 
                          <div onClick={() => searchUrl(`men's clothing`)} > Men Clothes  </div>  
                            </Link>
                        </li>
                        <li className="menu__item" >
                        <Link to={'/Categories'} style={{textDecoration: 'none', color: 'grey'}} > 
                          <div onClick={() => searchUrl(`women's clothing`)} > Women Clothes  </div>  
                            </Link>
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