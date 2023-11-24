import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import '../App.css';

export default function List() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get("http://localhost:8080/api/getAll").then((resp) => {
            console.log("data is", resp.data)
            setData(resp.data);
        });
    };

    const fnDelete = (id) => {
        axios.delete(`http://localhost:8080/api/deleteData/${id}`).then((resp) => {
            console.log("res", resp.data);
            getData();
        });
    };

    return (
        <div className="homepage"> 
            <h1 className="heading-section">Car Database Hub</h1>
            <button className="btn btn-primary addBtn" onClick={() => navigate('./add')}>Add Car </button>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.brand}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => fnDelete(item._id)}>Delete</button>
                                <button className="btn btn-secondary" onClick={() => navigate(`./edit/${item._id}`)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}