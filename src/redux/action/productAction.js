import { ActionTypes } from "../contants/actionType";

export const setProducts = (products) => {
	console.log("I got here in action", products);
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProduct = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product,
	};
};

export const removeSelectedProduct = (product) => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
		payload: product,
	};
};