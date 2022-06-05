import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/actionType";

export const fatchProducts = () => async (dispatch) => {
	const response = await fakeStoreApi.get("/products");
	console.log("response", response);
	dispatch({ type: ActionTypes.FATCH_PRODUCTS, payload: response.data })
};
export const fatchProduct = (id) => async (dispatch) => {
	//console.log("response fatch Product")
	const response = await fakeStoreApi.get(`/products/${id.productId}`);
	console.log("single fatch Product", response)
	dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
};


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
	};
};