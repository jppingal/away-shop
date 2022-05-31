import React from "react"
import camera from "../images/camera.jpg";
import Banner from "./Banner";
import "./products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
	const products = useSelector((state) => state.allProducts.products)
	// console.log("I asm here in Products", products);

	const renderProductsList = products.map((product) => {
		const { id, image, title, price, category } = product;
		return (
			<Link to={`/details/${id}`} key={id}>
				<div className="card" >
					<img src={image} alt="camera" className="products-img" />
					<div className="product-content">
						<div className="product-title">{title}</div>
						<div className="products-price">$ : {price}</div>
						<div className="product-category">{category}</div>
					</div>
				</div>
			</Link>
		)
	})

	return (
		<>
			<div className="product-container">
				<Banner />
				<div className="card-container" >
					{renderProductsList}
				</div>
			</div>
		</>
	)
}

export default Products;