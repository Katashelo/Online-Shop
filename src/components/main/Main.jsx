import React, { useState } from "react";
import HomePage from '../HomePage/HomePage'
import  './Main.css'
import Favorite from "../MyFavotite/MyFavorite";
import { Route, Routes } from "react-router-dom";
import Busket from "../Busket/Busket";
import Categories from "../Categories/Categories";
import { useDispatch } from "react-redux";
import { addItemToBusket, addItemToMyFavorite } from "../../store/actions";

const Main = (props) => {
  const [item, setItem] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

  const searchUrl = (url) => {
    fetch(`https://fakestoreapi.com/products/category/${url}`)
        .then(res => res.json())
        .then(
            res => {
                setIsLoaded({
                    isLoaded: true,
                });
                setItem({
                    item: res
                })
            },
            (error) => {
                setIsLoaded({
                    isLoaded: true,
                    error
                });
            })
}

const dispatch = useDispatch()
const handleAddFavorite = (item) => {
    dispatch(addItemToMyFavorite(item))
}
const handleAddToBusket = (item) => {
    dispatch(addItemToBusket(item))
}

    return <div className="main-wrapper" >
      <Routes>
        <Route path="/" element={<HomePage  searchUrl={searchUrl} handleAddFavorite={handleAddFavorite} handleAddToBusket={handleAddToBusket} />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Busket" element={<Busket />} />
        <Route path="/Categories" 
        element={<Categories searchUrl={searchUrl} 
                             item={item} error={error} isLoaded={isLoaded}
                             handleAddFavorite={handleAddFavorite} 
                             handleAddToBusket={handleAddToBusket} />} />
      </Routes>
    </div>


}

export default Main;