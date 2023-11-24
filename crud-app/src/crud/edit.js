import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import '../App.css';

export default function Edit() {

    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { carId } = useParams();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`http://localhost:8080/api/getOne/${carId}`).then((resp) => {
            console.log("data is", resp.data)
            setData(resp.data);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        console.log("form values-", data);
        axios.put(`http://localhost:8080/api/updateData/${carId}`, data).then((resp) => {
            navigate("/")
        });
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
            <>
                <div className="text-center pt-5"><h1 className="heading-section">Edit Form </h1></div>
                <div className="d-flex w-100 justify-content-center align-items-center">
                    <div className="formclass w-50 border bg-dark text-white p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form"> 
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter the name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData({ ...data, [e.target.name]: e.target.value })
                                    } />
                            </div>
                            <div className="form">
                                <label htmlFor="brand">Brand: </label>
                                <input
                                    type="text"
                                    name="brand"
                                    className="form-control"
                                    placeholder="Enter the brand"
                                    value={data.brand}
                                    onChange={(e) =>
                                        setData({ ...data, [e.target.name]: e.target.value })
                                    } />
                            </div>
                            <div className="form">
                                <label htmlFor="quantity">Quantity: </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    className="form-control"
                                    placeholder="Enter quantity"
                                    value={data.quantity}
                                    onChange={(e) =>
                                        setData({ ...data, [e.target.name]: e.target.value })} />
                                <br />
                                <button className="btn-1 btn btn-info">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </div>
    )
}