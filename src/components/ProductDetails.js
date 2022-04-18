import React from "react";
import camera from "../images/camera.jpg";
import "./products.css";
const ProductDetails = () => {
    return (
        <div className="productDetails-container">
            <div className="product-image-content">
                <img src={camera} alt="camera" className="products-detail-img" />
            </div>
            <div className="productDetail-content">
                <div className="product-details">
                    <div className="product-title">
                        Degital Camera (John Hardy Women's Legends Naga Gold &
                        Silver Dragon Station Chain Bracelet)</div>
                    <div className="product-reating">⭐⭐⭐⭐</div>
                    <div className="product-price">$ 122</div>
                    <div className="product-category">electronic</div>
                        <button className="btn">Add To Cart</button>
                    <div className="product-description">
                        <h3>Description:</h3>
                        <p>From our Legends Collection, the Naga was inspired by
                            the mythical water dragon that protects the ocean's pearl.
                            Wear facing inward to be bestowed with love and abundance,
                            or outward for protection.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="card-container" >
                    <div className="card">
                        
                       
                    </div>
                </div> */}
        </div>
    )
}
export default ProductDetails;