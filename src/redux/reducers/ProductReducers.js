import { ActionTypes } from "../contants/actionType";

const initialState = {
    products: [],
};
const ProductReducers = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    };
};
export default ProductReducers;