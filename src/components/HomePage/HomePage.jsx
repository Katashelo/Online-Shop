import React, { useState } from "react";
import "./HomePage.css"
import useFetchItems from "../../API/useFetchItems";
import NavigationPanel from "../NavigatePanel/NavigationPanel";
import BlockItems from "../BlockItems/BlockItems";
import { addItemToBusket, addItemToMyFavorite } from "../../store/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = ({searchUrl, handleAddFavorite, handleAddToBusket }) => {

    const url = 'https://fakestoreapi.com/products?limit=8'
    const [ test, setTest] = useState(url)
    const { item, error, isLoaded } = useFetchItems(test)

    console.log(test)
    // const dispatch = useDispatch()
    // const handleAddFavorite = (item) => {
    //     dispatch(addItemToMyFavorite(item))
    // }
    // const handleAddToBusket = (item) => {
    //     dispatch(addItemToBusket(item))
    // }

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
                <NavigationPanel  searchUrl={searchUrl} />
                <div className="home_block" >
                    {/* <Link to={'/'} onClick={ () => handleTest() } >test 1</Link>
                    <button onClick={ () => setTest('https://fakestoreapi.com/products/category/electronics') } >test 2</button>
                    <button>test 3</button> */}
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