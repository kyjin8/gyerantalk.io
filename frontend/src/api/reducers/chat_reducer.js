const CHAT_SERVER = 'chat_server';
const AFTER_POST_MESSAGE = 'after_post_message';

export default function(state={},action){
    switch(action.type){
        case CHAT_SERVER:
            return {...state, chats: action.payload }
        case AFTER_POST_MESSAGE:
                return {...state, chats: state.chats.concat(action.payload) }
        default:
            return state;
    }
}