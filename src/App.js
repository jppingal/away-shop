
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import { Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/header" component={Header} />
        <Route path="/product" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
