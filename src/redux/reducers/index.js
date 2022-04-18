  import {combineReducers} from "redux";

  import ProductReducers from "./ProductReducers";

   const reducers = combineReducers({
    allProducts: ProductReducers
  }
  )
  export default reducers;