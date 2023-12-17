import React from "react";
import { useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Adjust(props)
{
    let {id} = useParams();

    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [price, setPrice] = useState("");

    const navigate = useNavigate;

    useEffect(() => {
        axios.get('http://localhost:5000/api/items/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setLabel(response.data.label);
            setPrice(response.data.price);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: id,
            title: title,
            label: label,
            price: price
        };
        axios.put('http://localhost:5000/api/items/'+ id, newItem)
        .then((res) => {
            console.log(res.data);
            navigate('/menu');
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Item Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    </div>
                    <div className="form-group">
                    <label>Add Item Label: </label>
                    <input type="text"
                    className="form-control"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    />
                    </div>
                    <div className="form-group">
                    <label>Add Item Price: </label>
                    <input type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Change Item" className="btn btn-secondary"></input>
                </div>
            </form>
        </div>
    )
}