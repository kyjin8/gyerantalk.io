const SOCKET_SEND = 'socket_send';
const SOCKET_RECEIVE = 'socket_receive';
const SOCKET_LIST = 'socket_list';

export default function(state={}, action){
    switch (action.type) {
        case SOCKET_SEND:
            return {...state, chats: action.payload }
        // case SOCKET_RECEIVE:
        //     let newChatList = state.chatList.slice();
        //     newChatList.push(action.data);
        //     return { ...state, chatList: newChatList };
        case SOCKET_LIST:
            return {...state, list: action.payload }
        default:
            return state;
    }
}