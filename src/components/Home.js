import React,{useEffect, useState} from "react"
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import { Link } from "react-router-dom";
import{setProducts} from "../redux/action/productAction"

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.allProducts.products)
    const [myProducts, setMyProducts] = useState()
    console.log("myProducts :",myProducts)

    useEffect(() => {
      const fatchProducts = async () => {
        const url = "https://fakestoreapi.com/products";
        const res = await fetch(url);
        const resJson = await res.json();
        dispatch(setProducts(resJson));
      }
      fatchProducts();
    }, [])
    // useEffect(()=>{
    // const fatchProducts = async() =>{
    //   const getData = await fetch('https://fakestoreapi.com/products')
     
    //   .then((response) => { 
    //     return response.json()
    //   })
    //   .then((data) => { 
    //     return  data
    //     dispatch(setProducts(data))
    //   }).catch((error)=>{
    //     return console.log("error :", error)
    //   })
      
    // }
    
    //   fatchProducts()
    // },[])

    console.log("products", products)
    return(
        <>
        <div className="main-container">
          <Products/>
        </div>
        </>
    )
}
export default Home;