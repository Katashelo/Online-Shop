import React from 'react'
import "../HomePage/HomePage.css"
import BlockItems from '../BlockItems/BlockItems';
import NavigationPanel from '../NavigatePanel/NavigationPanel';
import { Navigate } from 'react-router-dom';
const Categories = ({ error, isLoaded, item, searchUrl, handleAddFavorite, handleAddToBusket }) => {

        if (error) {
            return <div>Помилка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Завантаження...</div>;
        } else {

            return (
                <div  >
                    <NavigationPanel searchUrl={searchUrl} />
                    <div className="home_block" >
                        {item.item.map((item) => (
                            <div key={item.id} >
                                <BlockItems items={item} addFavorite={handleAddFavorite} addBusket={handleAddToBusket} />
                            </div>
                        ))}
                    </div>
                </div>)
        }
}

export default Categories;