import React from 'react';
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';

function ChatCard(props) {

    return (
        <div>
            <div>
                <div>{props.sender.userName}</div>
                <img src={props.sender.image} />
                <p>{props.message}</p>
                {
                props.message.substring(0,8)==="uploads/" ?
                props.message.substring(props.message.length - 3, props.message.length) === 'mp4' ?
                <video 
                src={`http://localhost:4000/${props.message}`} 
                alt="video"
                type="video/mp4" controls
                />
                :
                <img 
                src={`http://localhost:4000/${props.message}`} 
                alt="image"
                />
                :
                <p>{props.message}</p>
                }
                <div title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment(props.sender.nowTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                </div>
            </div>
        </div>
    )
}

export default ChatCard
