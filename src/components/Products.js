import React from "react"
import camera from "../images/camera.jpg";
import Banner from "./Banner";
import "./products.css";

const Products = () => {
    return (
        <>
            <div className="products-container" >
                {/* <Banner /> */}
                {/* <div className="card">
                <img src={camera} alt="camera" className="products-img" />
                        <div className="container">
                            <h4><b>Jane Doe</b></h4>
                            <p>Interior Designer</p>
                        </div>
                </div> */}
                <div className="card">
                    <img src={camera} alt="camera" className="products-img" />
                    <div className="product-content">
                        <div className="product-title">Degital Camera (John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet)</div>
                        <div className="product-price">$ 122</div>
                        <div className="product-category">electronic</div>
                    </div>
                </div>
               {/*  <div className="card">
                    <img src={camera} alt="camera" className="products-img" />
                    <div class="container">
                        <p>Degital Camera</p>
                    </div>
                </div>
                <div className="card">
                    <img src={camera} alt="camera" className="products-img" />
                    <div class="container">
                        <p>Degital Camera</p>
                    </div>
                </div>
                <div className="card">
                    <img src={camera} alt="camera" className="products-img" />
                    <div class="container">
                        <p>Degital Camera</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default Products;