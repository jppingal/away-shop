import React from "react"
import camera from "../images/camera.jpg";
import Banner from "./Banner";
import "./products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
	const products = useSelector((state) => state.allProducts.products)
	console.log("I asm here in Products", products);

	return (
		<>
			<div className="product-container">
				<Banner />
				<Link to="/details">
					<div className="card-container" >
						{products.map((item) => {
							return (
								<div className="card" key={item.id}>
									<img src={item.image} alt="camera" className="products-img" />
									<div className="product-content">
										<div className="product-title">{item.title}</div>
										<div className="products-price">{item.price} </div>
										<div className="product-category">{item.category}</div>
									</div>
								</div>

							)
						})}
					</div>
				</Link>
			</div>
		</>
	)
}




// const Products = () => {
// 	const products = useSelector((state) => state.allProducts.products)
// 	const renderProducts = () => {
// 		return products.map((item, i) => {
// 			console.log("Hello", item);
// 			return (
// 				<div style={{ marginLeft: 20, marginRight: 20, width: 400, height: 400 }}
// 					key={i}
// 				>
// 					<img src={item.image} alt="camera" className="products-img" />
// 					<div className="product-content">
// 						<div className="product-title">{item.title}</div>
// 						<div className="products-price">{item.price}</div>
// 						<div className="product-category">{item.category}</div>
// 					</div>
// 				</div>
// 			);
// 		})
// 	}

// 	return (
// 		<div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
// 			{renderProducts()}
// 		</div>
// 	);
// }
export default Products;