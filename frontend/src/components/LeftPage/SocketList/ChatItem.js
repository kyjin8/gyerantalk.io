import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChatInform } from '../../../api/actions/socket_action';
import moment from 'moment';
import { FriendProfile } from '../../../api/actions/socket_action';
import { withRouter } from 'react-router-dom';
import '../../MainPage/Main.scss';
import useChat from './useChat';
import axios from 'axios';
import { CountHow } from '../../../api/actions/socket_action';
import 'moment/locale/ko'; 

const ChatItem = ({ chat, UserData, checktUpdate, setchecktUpdate }) => {

    const dispatch = useDispatch();

    const [Mes, setMes] = useState("");
    const [MatchUrl, setMatchUrl] = useState("");
    const [Fri, setFri] = useState("");
    const {Messages} = useChat(chat, checktUpdate, setchecktUpdate);
    const [Num, setNum] = useState("");

    useEffect(() => {
        let body ={
            chat : chat
        }
        dispatch(ChatInform(body))
        .then(response => {
            setMes(response.payload[0]);
            setMatchUrl(response.payload[0].roomName.split('_'))
            if(UserData._id===response.payload[0].roomName.split('_')[0]){
                let body ={
                    mem : response.payload[0].roomName.split('_')[1]
                }
                dispatch(FriendProfile(body))
                .then(response => {
                    setFri(response.payload[0])
                })
            }else{
                let body ={
                    mem : response.payload[0].roomName.split('_')[0]
                }
                dispatch(FriendProfile(body))
                .then(response => {
                    setFri(response.payload[0])
                })
            }
        })
    }, [ UserData, chat, Messages ])

    useEffect(() => {
        let body = {
            roomId : chat,
            _id : UserData._id,
        }
        dispatch(CountHow(body))
        .then(response => {
            setNum(response.payload.number);
        })
        // axios.post('/api/chats/countMessage',body)
        // .then(response => {
        //     console.log(response)
        // })
    }, [ Messages, Fri ])

    useEffect(() => {
        setchecktUpdate(!checktUpdate)
    }, [Num])
    return (
        <div className="talking">
            {
                Mes && Fri &&
                <Link to={`/main/ChatingRoom/${chat}`}>
                    <div className="talk_site">
                        <img src={Fri.image} />
                        <div className="talk_pro">
                            <span>
                                {Fri.userName}
                            </span><br/>
                            <span className="talk_message">
                                {Mes.message}
                            </span>
                        </div>
                        <div className="talk_div">
                            <div className="talk_time">
                                {moment(Mes.date).format('A h:mm')}
                            </div>
                            <div className="talk_count">
                                {
                                    Num !== 0 ?
                                    Num
                                    : <></>
                                    }
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </div>
    )
}

export default withRouter(ChatItem);

