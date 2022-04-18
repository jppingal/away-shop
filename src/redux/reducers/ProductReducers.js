import { ActionTypes } from "../contants/actionType";

const initialState = {
    products: [
        {
            id:1,
            title: "Jai",
            categoty: "web developer",
        },
    ],
};
const ProductReducers = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    };
};
export default ProductReducers;