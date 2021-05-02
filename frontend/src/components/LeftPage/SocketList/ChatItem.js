import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChatInform } from '../../../api/actions/socket_action';
import moment from 'moment';
import { FriendProfile } from '../../../api/actions/socket_action';
import { withRouter } from 'react-router-dom';

const ChatItem = ({ chat, UserData},props) => {
    
    // const state = useSelector(state =>(
    //     {
    //         image : state.socket.indid.image,
    //         userName : state.socket.indid.userName,
    //         roomName : chat
    //     }
    // ))

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
    }, [ UserData, chat ])
    useEffect(() => {
        console.log(Mes)
    }, [Fri])

    // useEffect(() => {
    //     let body ={
    //         chat : chat
    //     }
    //     dispatch(ChatInform(body))
    //     .then(response => {
    //         setMes(response.payload);
    //         setMatchUrl(response.payload[0].roomName.split('_'))
    //     })
    
    // }, [ UserData, chat ])
    // useEffect(() => {
    //     if(UserData._id === MatchUrl[0]){
    //         let body ={
    //             mem : MatchUrl[1]
    //         }
    //         dispatch(FriendProfile(body))
    //         .then(response => {
    //             setFri(response.payload[0])
    //         })
    //     }else{
    //         let body ={
    //             mem : MatchUrl[0]
    //         }
    //         dispatch(FriendProfile(body))
    //         .then(response => {
    //             setFri(response.payload[0])
    //         })
    //     }
    // }, [ Mes, MatchUrl, UserData ])

    return (
        <div>
            {
                Mes && Fri &&
                <Link to={`/main/ChatingRoom/${chat}`}>
                    <div>
                        <img src={Fri.image} />
                        <div>
                            {Fri.userName}<br />
                            {Mes.message}
                        </div>
                        <div>{moment(Mes.createdAt).format('A HH:MM분')}</div>
                    </div>
                </Link>
            }
        </div>
    )
}

export default withRouter(ChatItem);

