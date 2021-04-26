const SEARCH_USER = "search_user";
const ADD_USER = "add_user";

export default function(state={}, action){
    switch (action.type) {
        case SEARCH_USER:
            return {...state, friend : action.payload}
        case ADD_USER:
            return {...state, plus : action.payload}
        default:
            return state;
    }
}