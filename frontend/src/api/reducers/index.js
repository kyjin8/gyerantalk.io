import { combineReducers } from 'redux';
import user from './user_reducer';
import friend from './friend_reducer';

const rootReducer = combineReducers({
    user,
    friend
})

export default rootReducer;