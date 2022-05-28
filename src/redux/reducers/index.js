  import {combineReducers} from "redux";

  import {ProductReducers, SelectedProductReducers} from "./ProductReducers";

   const reducers = combineReducers({
    allProducts: ProductReducers,
    product: SelectedProductReducers,
  }
  )
  export default reducers;