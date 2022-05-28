import { ActionTypes } from "../contants/actionType";

const initialState = {
	products: [],
};
export const ProductReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			console.log("Here is products".payload);
			return { ...state, products: payload };
		default:
			return state;
	};
};

export const SelectedProductReducers = (state = {}, { type, payload }) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return { ...state, ...payload };
		default:
			return state;
	};
}