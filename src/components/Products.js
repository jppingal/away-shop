import React from "react"
import camera from "../images/camera.jpg";
import Banner from "./Banner";
import "./products.css";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Products = () => {
    const products = useSelector((state)=>state.allProducts.products)
    // const {id, title} = products[0]
    return (
        <>
            <div className="product-container">
                <Banner />
                <Link to="/details">
                <div className="card-container" >
                    <div className="card">
                        <img src={camera} alt="camera" className="products-img" />
                        <div className="product-content">
                            <div className="product-title">Degital Camera (John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet)</div>
                            <div className="products-price">$ 122</div>
                            <div className="product-category">electronic</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}
export default Products;