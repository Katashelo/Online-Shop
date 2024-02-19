import React from "react";
import HomePage from '../HomePage/HomePage'
import  './Main.css'
import Favorite from "../MyFavotite/MyFavorite";
import { Route, Routes } from "react-router-dom";
import Busket from "../Busket/Busket";

const Main = (props) => {
    return <div className="main-wrapper" >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Busket" element={<Busket />} />
      </Routes>
    </div>


}

export default Main;