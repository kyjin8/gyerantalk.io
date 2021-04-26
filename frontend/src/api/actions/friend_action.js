import axios from 'axios';

const SEARCH_USER = "search_user";

export function searchFriend(dataToSubmit){
    const request = axios.post('/api/users/friendSearch',dataToSubmit)
    .then(response => response.data)
    
    return {
        type : SEARCH_USER,
        payload : request
    }
}