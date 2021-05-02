import axios from 'axios';

const SOCKET_SEND = 'socket_send';
const SOCKET_RECEIVE = 'socket_receive'
const SOCKET_LIST = 'socket_list';
const SOCKET_CHATINFORM = 'socket_chatinform';
const SOCKET_FRIEND_PROFILE = 'socket_profile';

export function getChats(dataToSubmit){
    const request = axios.post('/api/chats/getChat',dataToSubmit)
    .then(response => response.data)

    return {
        type :  SOCKET_SEND,
        payload : request
    }
}

export function ListFind(dataToSubmit) {
    const request = axios.post('/api/chats/ListShow', dataToSubmit)
    .then(response => response.data)

    return {
        type : SOCKET_LIST,
        payload : request
    }
}

export function ChatInform(dataToSubmit) {

    const request = axios.post('/api/chats/textMessage',dataToSubmit)
    .then(response => response.data)

    return {
        type : SOCKET_CHATINFORM,
        payload : request
    }
}

export function FriendProfile(dataToSubmit) {
    const request = axios.post('/api/chats/profiles',dataToSubmit)
    .then(response => response.data)

    return {
        type : SOCKET_FRIEND_PROFILE,
        payload : request
    }
}

// export function receiveChat(data){

//     return {
//         type: SOCKET_RECEIVE,
//         data
//     }
// }

