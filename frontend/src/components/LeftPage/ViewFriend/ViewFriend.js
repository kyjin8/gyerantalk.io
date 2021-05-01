import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFriend } from '../../../api/actions/chat_action';
import TelegramIcon from '@material-ui/icons/Telegram';

const ViewFriend = ({match, UserData}) => {

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
        })

    }, [])

    return (
        <div className="friend_profile">
            <div>
                <img src={DataFriend.image} />
                <div className="friend_name">{DataFriend.userName}</div>
                <div className="friend_say">{DataFriend.message}</div>
                <Link to={`/main/ChatingRoom/${UserData._id}_${DataFriend._id}`}>
                    <TelegramIcon />
                </Link>
            </div>
        </div>
    )
}

export default withRouter(ViewFriend);
