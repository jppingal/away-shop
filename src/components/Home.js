import React,{useState} from "react"
import { useDispatch } from 'react-redux';
import { addData } from '../action/index';
const Home = () => {
    const dispatch = useDispatch()

  const [inputData, setInputData]= useState('')
    return(
        <>
            <h1>welcome in home page</h1>
            <input 
          type="text"  
          value={inputData} 
          onChange={(e)=>setInputData(e.target.value)} >
          </input>
          <div>{inputData}</div>
        <button onClick={()=> dispatch(addData(inputData)) }>Click Learn React</button>
        </>
    )
}
export default Home;