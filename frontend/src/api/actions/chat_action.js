import axios from 'axios';

const CHAT_SERVER = 'chat_server';
const AFTER_POST_MESSAGE = 'after_post_message';

export function getChats(dataToSubmit){
    const request = axios.get('/api/chats/getChat')
    .then(response => response.data)

    return {
        type : CHAT_SERVER,
        payload : request
    }
}

export function afterPostMessage(data){

    return {
        type: AFTER_POST_MESSAGE,
        payload: data
    }
}

