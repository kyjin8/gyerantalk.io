import axios from 'axios';

const SOCKET_SEND = 'socket_send';
const SOCKET_RECEIVE = 'socket_receive'

export function sendChat(dataToSubmit){
    // const request = axios.get('/api/chats/getChat')
    // .then(response => response.data)

    return {
        type :  SOCKET_SEND,
        // payload : request
    }
}

export function receiveChat(data){

    return {
        type: SOCKET_RECEIVE,
        data
    }
}

