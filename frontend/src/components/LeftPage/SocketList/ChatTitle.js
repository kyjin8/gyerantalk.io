import React from 'react';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { withRouter } from 'react-router-dom';

const ChatTitle = () => {
    return (
        <div className="chat_titles">
            채팅
            <RateReviewIcon/>
        </div>
    )
}

export default withRouter(ChatTitle);
