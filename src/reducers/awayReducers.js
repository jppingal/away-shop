const initialState = {
    list: []
}
const awayReducers = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_PRODUCT":
            const {id, data}= action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        default: return state;  
    }
}
export default awayReducers;