import React,{useState} from "react"
import { useDispatch } from 'react-redux';
import { addData } from '../redux/action/index';
import Header from "./Header";
import Products from "./Products";
// import "../index.css";

const Home = () => {
    const dispatch = useDispatch()

  const [inputData, setInputData]= useState('')
    return(
        <>
        <div className="main-container">
          <Header/>
          <Products/>
        </div>
         {/*    <h1>welcome in home page</h1>
            <input 
          type="text"  
          value={inputData} 
          onChange={(e)=>setInputData(e.target.value)} >
          </input>
          <div>{inputData}</div>
        <button onClick={()=> dispatch(addData(inputData)) }>Click Learn React</button> */}
        </>
    )
}
export default Home;