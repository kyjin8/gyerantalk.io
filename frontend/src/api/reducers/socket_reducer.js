const SOCKET_SEND = 'socket_send';
const SOCKET_RECEIVE = 'socket_receive';

export default function(state={}, action){
    switch (action.type) {
        case SOCKET_SEND:
            return {...state, socketId : action.action.socketId}
        case SOCKET_RECEIVE:
            let newChatList = state.chatList.slice();
            newChatList.push(action.data);
            return { ...state, chatList: newChatList };
        default:
            return state;
    }
}