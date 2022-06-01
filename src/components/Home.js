import React, { useEffect } from "react"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Products from "./Products";
import {fatchProducts } from "../redux/action/productAction"

const Home = () => {
	const dispatch = useDispatch()
	// const fetchApi = async () => {
	// 	const response = await axios.get("https://fakestoreapi.com/products")
	// 		.then((res) => {
	// 			console.log("I am here in api call", res.data);
	// 			dispatch(setProducts(res.data))
	// 			return true
	// 		})
	// 		.catch((err) => {
	// 			console.log("err", err)
	// 		})
	// }

	useEffect(() => {
		dispatch(fatchProducts());
	}, [])

	return (
		<div className="main-container">
			<Products />
		</div>
	)
}
export default Home;