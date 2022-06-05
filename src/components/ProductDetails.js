import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import {
	fatchProduct,
	removeSelectedProduct
} from "../redux/action/productAction";

const ProductDetails = () => {
	const dispatch = useDispatch();

	const product = useSelector((state) => state.product)

	const { id, image, title, price, description, category, rating } = product;
	// { !!rating && console.log("product------", rating.count) }
	const productId = useParams();

	// const fatchProductDetails = async () => {
	//     const response = await axios
	//         .get(`https://fakestoreapi.com/products/${productId.id}`)
	//         .catch((err) => { console.log("Error :", err) })
	//     dispatch(selectedProduct(response.data))
	// }

	useEffect(() => {
		if (productId && productId !== " ")
			console.log("productId", productId)
		dispatch(fatchProduct(productId));
		return () => {
			dispatch(removeSelectedProduct());
		}
	}, [productId])

	return (
		<>
			<div className="productDetails-container">
				{Object.keys(product).length === 0 ? (
					<div>...loading</div>
				) : (<div className="productDetails-contants">
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
									{!!rating && <span style={{ marginLeft: 20 }}>rate: {rating.rate}</span>}
									{!!rating && <span style={{ marginLeft: 10 }}>count: {rating.count}</span>}
								</div>
							</div>
							<div className="product-price">$ : {price}</div>
							<div className="product-category">{category}</div>
							<button className="btn">Add To Cart</button>
							<div className="product-description">
								<h3>Description:</h3>
								<p>{description}</p>
							</div>
						</div>
					</div>
				</div>
				)}
			</div>

		</>
	)
}
export default ProductDetails;