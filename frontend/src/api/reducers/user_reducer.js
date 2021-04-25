const LOGIN_USER = "login_user";
const REGISTER_USER = "register_user";
const AUTH_USER = "auth_user";
const CHECK_ID = 'checkid_user';
const CHECK_NICK = 'checknick_user';
const GET_USER = "get_user";

export default function(state={}, action){
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess : action.payload };
        case REGISTER_USER:
            return {...state, register : action.payload };
        case AUTH_USER:
            return {...state, userData : action.payload };
        case CHECK_ID:
            return {...state, chekckId : action.payload};
        case CHECK_NICK:
            return {...state, checkNick : action.payload};    
        case GET_USER:
            return {...state, userData : action.payload};
        default:
            return state;
    }
}