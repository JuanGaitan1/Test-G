const inicioState = {
    detail: [],
    items:[]
}


function rootReducer (state = inicioState, action) {
    switch(action.type){
        case 'GET_ITEM':
        return{
            ...state,
            items: action.payload,
        }
        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        case 'GET_SEARCH':
        return{
            ...state,
            items: action.payload
        } 
            default:
            return state;
    }
}

export default rootReducer