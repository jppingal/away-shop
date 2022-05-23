import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import { Link } from "react-router-dom";
import { setProducts } from "../redux/action/productAction"

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProducts.products)
  const [myProducts, setMyProducts] = useState()
  // useEffect(() => {
	// 	const fetchApi = async () => {
	// 		const url = "https://fakestoreapi.com/products";
	// 		const res = await fetch(url);
	// 		const resJson = await res.json();
  //     console.log(resJson)
  //     dispatch(setProducts(resJson))
	// 		setMyProducts(resJson);
	// 	}
	// 	fetchApi();
	// }, [])
  const fetchApi = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    .then((fatchData)=> {return fatchData.json()
      dispatch(setProducts(fatchData))
    })
    .catch((err) => {
      console.log("err", err)
    })

  }

  useEffect(() => {
    fetchApi();
  }, [])
  console.log("products", products)
  return (
    <>
      <div className="main-container">
        <Products />
      </div>
    </>
  )
}
export default Home;