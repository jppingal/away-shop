import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { addData } from './action/index';
import { Provider } from 'react-redux';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()

  const [inputData, setInputData]= useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn React
        </a>
          <input 
          type="text"  
          value={inputData} 
          onChange={(e)=>setInputData(e.target.value)} >
          </input>
          <div>{inputData}</div>
        <button onClick={()=> dispatch(addData(inputData)) }>Click Learn React</button>
      </header>
    </div>
  );
}

export default App;
