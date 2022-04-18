export const addData = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteData = () => {
    return {
        type: "DELETE_PRODUCT"
    }
}
export const removeProduct = () =>{
    return {
        type: "REMOVE_PRODUCT"
    }
}