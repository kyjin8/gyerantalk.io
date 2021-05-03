import axios from 'axios';

const GET_POSTS = 'get_posts';
const CREATE_POST = 'create_post';

export function getPosts(){
    const request = axios.get('/api/posts')
    .then(response => response.data)

    return {
        type : GET_POSTS,
        payload : request
    }
}
export function createPosts(datatoSubmit){
    console.log('post create', datatoSubmit)
    const request = axios.post('/api/posts', datatoSubmit)
    .then(response => response.data)

    return {
        type : CREATE_POST,
        payload : request
    }
}