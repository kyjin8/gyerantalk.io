import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChatInform } from '../../../api/actions/socket_action';
import moment from 'moment';
import { FriendProfile } from '../../../api/actions/socket_action';

const ChatItem = ({match, chat, UserData}) => {

    const dispatch = useDispatch();

    const [Mes, setMes] = useState("");
    const [MatchUrl, setMatchUrl] = useState("");
    const [Fri, setFri] = useState("");

    useEffect(() => {
        let body ={
            chat : chat
        }
        dispatch(ChatInform(body))
        .then(response => {
            setMes(response.payload);
            setMatchUrl(response.payload[0].roomName.split('_'))
        })
    }, [chat])
    // useEffect(() => {
    //     console.log(Mes[0],'1111111111');
    //     setMatchUrl(Mes[0].roomName.split('_'))
    // }, [Mes])
    useEffect(() => {
        if(MatchUrl.length !== 0){
            if(UserData._id === MatchUrl[0]){
                let body ={
                    mem : MatchUrl[1]
                }
                dispatch(FriendProfile(body))
                .then(response => {
                    setFri(response.payload)
                    console.log(response.payload);
                })
            }else{
                let body ={
                    mem : MatchUrl[0]
                }
                dispatch(FriendProfile(body))
                .then(response => {
                    setFri(response.payload)
                    console.log(response.payload);
                })
            }
        }
        
    }, [Mes])

    return (
        <div>
            {Mes.length !== 0 ?
            
            <Link to={`/main/ChatingRoom/${Mes[0].roomName}`}>
                <div>
                    <img src={Fri[0].image} />
                    <div>
                        {Fri[0].userName}<br/>
                        {Mes[0].message}
                    </div>
                    <div>{moment(Mes[0].createdAt).format('A HH:MM분')}</div>
                </div>
            </Link>
                :
                <></>
        }
        </div>
    )
}

export default ChatItem

