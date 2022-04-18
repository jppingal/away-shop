
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import { Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/details" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
