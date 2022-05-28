import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import camera from "../images/camera.jpg";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/action/productAction";

const ProductDetails = () => {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product)

    const {id, image, title, price, description, category, rating}= product;
    console.log("product------", product)
    const productId = useParams();

    const fatchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId.id}`).catch((err) => { console.log("Error :", err) })
        dispatch(selectedProduct(response.data))

    }

    useEffect(() => {
        if (productId && productId !== " ") fatchProductDetails();
    }, [productId])

    return (
        <>
            <div className="productDetails-container">
                <div className="product-image-content">
                    <img src={image} alt="camera" className="products-detail-img" />
                </div>
                <div className="productDetail-content">
                    <div className="product-details">
                        <div className="product-title">
                        {title}</div>
                        <div className="product-reating">
                        <div>
                            <h4>Rating :</h4>
                            <span style={{marginLeft: 20}}>rate: {rating.rate}</span>
                            <span style={{marginLeft: 10}}>count: {rating.count}</span>
                        </div>
                        </div>
                        <div className="product-price">₹ : {price}</div>
                        <div className="product-category">{category}</div>
                        <button className="btn">Add To Cart</button>
                        <div className="product-description">
                            <h3>Description:</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ProductDetails;