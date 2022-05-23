import { ActionTypes } from "../contants/actionType";

const initialState = {
	products: [],
};
const ProductReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			console.log("Here is products".payload);
			return { ...state, products: payload };
		default:
			return state;
	};
};
export default ProductReducers;