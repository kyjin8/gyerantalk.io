import { combineReducers } from 'redux';
import user from './user_reducer';
import friend from './friend_reducer';
import chat from './chat_reducer';
const rootReducer = combineReducers({
    user,
    friend,
    chat
})

export default rootReducer;