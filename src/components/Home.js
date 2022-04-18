import React,{useState} from "react"
import { useDispatch } from 'react-redux';
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import { Link } from "react-router-dom";

const Home = () => {
    // const dispatch = useDispatch()

  const [inputData, setInputData]= useState('')
    return(
        <>
        <div className="main-container">
          <Products/>
        </div>
        </>
    )
}
export default Home;