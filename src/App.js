import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/header" component={Header} />
    </Switch>

        {/* <Header />
        <Home /> */}
    </div>
  );
}

export default App;
