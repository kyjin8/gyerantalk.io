import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFriend } from '../../../api/actions/chat_action';
import TelegramIcon from '@material-ui/icons/Telegram';

const ViewFriend = ({match}) => {

    const dispatch = useDispatch();

    const data = match.params.search || null;

    const [DataFriend, setDataFriend] = useState("");

    useEffect(() => {

        let body = {
            data : data
        }

        dispatch(getFriend(body))
        .then(response => {
            setDataFriend(response.payload);
            console.log(response.payload);
        })

    }, [])

    return (
        <div className="friend_profile">
            <div>
                <img src={DataFriend.image} />
                <div className="friend_name">{DataFriend.userName}</div>
                <div className="friend_say">{DataFriend.message}</div>
                <TelegramIcon />
            </div>
        </div>
    )
}

export default withRouter(ViewFriend);
