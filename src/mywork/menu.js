import {useEffect, useState} from "react";
import Items from './items';
import axios from "axios";



function Menu() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
        .then((response) => {
            setItems(response.data);
        })
        .catch((error) => {
            console.log(error);
        }
        );
    },[]
    );

    return (
        <div>
            <h1>Welcome to the menu!</h1>
            <Items myItems={items}></Items>
        </div>
    );
}

export default Menu;