import { ActionTypes } from "../contants/actionType";

const initialState = {
	products: [],
};
export const ProductReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			// console.log("i am Here in products".payload);
			return { ...state, products: payload };
		case ActionTypes.FATCH_PRODUCTS:
			return { ...state, products: payload };
		default:
			return state;
	};
};

export const SelectedProductReducers = (state = {}, { type, payload }) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return { ...state, ...payload };
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	};
};