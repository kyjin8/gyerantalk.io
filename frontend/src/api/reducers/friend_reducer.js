const SEARCH_USER = "search_user";

export default function(state={}, action){
    switch (action.type) {
        case SEARCH_USER:
            return {...state, search : action.payload}
        default:
            return state;
    }
}