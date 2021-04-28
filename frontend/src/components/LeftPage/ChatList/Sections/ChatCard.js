import React from 'react';
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';

function ChatCard(props) {

    return (
        <div>
            <div>
                <div>{props.sender.userName}</div>
                {/* <img src={props.sender.image} /> */}
                {
                props.message.substring(0,8)==="uploads/"
                /////////////
                }
                <p>{props.message}</p>
                <div title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                        <span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
                </div>
            </div>
        </div>
    )
}

export default ChatCard
