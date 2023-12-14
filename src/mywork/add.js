import { useState } from "react";
import axios from "axios";

function Add()
{
    const [title, setTitle] = useState('');
    const [label, setLabel] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name"+ title,"Label"+ label, "Price"+ price);

        const item = {
            title:title,
            label:label,
            price:price
        }
        axios.post('http://localhost:5000/api/items', item)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.data));
    }

    return (
        <div>
            <h2>Welcome to the Menu</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Product Name: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                </div>
                <div className="form-group">
                    <label>Add Product Label: </label>
                    <input type="text"
                    className="form-control"
                    value={label}
                    onChange={(e) => {setLabel(e.target.value)}}
                />
                </div>
                <div className="form-group">
                    <label>Add Product Price: </label>
                    <input type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => {setPrice(e.target.value)}}
                />
                </div>
                <input type="submit" value="Add Product"></input>
            </form>
        </div>
    )
}

export default Add;