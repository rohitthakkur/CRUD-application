import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../App.css';

export default function Add() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        brand: "",
        quantity: "",
    });

    // function used to submit values and change them
    const handleSubmit = async (e) => {
        e.preventDefault();  // prevent screen to get refreshed
        console.log("form values-", data);
        axios.post("http://localhost:8080/api/postData", data).then((resp) => {
            console.log("res", resp);
            navigate("/")
        });
    };

    return (
        <>
            <div className="text-center pt-5">
                <h1 className="heading-section">Add Car Form </h1> </div>
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
                                onChange={(e) =>
                                    setData({ ...data, [e.target.name]: e.target.value })} />
                            <br />
                            <button className="btn-1 btn btn-info">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}