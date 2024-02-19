import React from "react";
import "./HomePage.css"
import useFetchItems from "../../API/useFetchItems";
import NavigationPanel from "../NavigatePanel/NavigationPanel";
import BlockItems from "../BlockItems/BlockItems";
import { addItemToBusket, addItemToMyFavorite } from "../../store/actions";
import { useDispatch } from "react-redux";

const HomePage = () => {

    const url = 'https://fakestoreapi.com/products?limit=8'
    const { item, error, isLoaded } = useFetchItems(url)

    console.log(item)
    const dispatch = useDispatch()
    const handleAddFavorite = (item) => {
        dispatch(addItemToMyFavorite(item))
    }
    const handleAddToBusket = (item) => {
        dispatch(addItemToBusket(item))
    }

    if (error) {
        return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Завантаження...</div>;
    } else {

        const itemy = []
        item.item.map(arr => (
            itemy.push(arr)
        ))

        console.log(itemy)
        return (
            <div  >
                <NavigationPanel />
                <div className="home_block" >
                {itemy.map((item) => (
                    <div key={item.id} >
                        <BlockItems items={item} addFavorite={handleAddFavorite} addBusket={handleAddToBusket}/>
                    </div>
                ))}
                </div>
            </div>)
    }
}

export default HomePage;