import axios from 'axios';

const SEARCH_USER = "search_user";
const ADD_USER = "add_user";

export function searchFriend(dataToSubmit){
    const request = axios.post('/api/users/friendSearch',dataToSubmit)
    .then(response => response.data)

    return {
        type : SEARCH_USER,
        payload : request
    }
}

export function friendAdd(dataToSubmit){
    const request = axios.post('/api/users/addFriend',dataToSubmit)
    .then(response => response.data)

    console.log(request,'aaaaaaaaa');

    return {
        type : ADD_USER,
        payload : request
    }
}
