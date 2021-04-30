import React, { useState, useEffect } from 'react';
import useChat from './useChat';
import { withRouter } from 'react-router-dom';
import TextsmsIcon from '@material-ui/icons/Textsms';
import { useDispatch, useSelector } from 'react-redux';
import { getChats } from '../../../api/actions/socket_action';

const ChatingRoom = ({match, UserData}) => {

    const dispatch = useDispatch();

    const roomId = match.params.search;

    // 처음 채팅 가져오기
    useEffect(() => {

        let body = {
            roomId : roomId
        }
        dispatch(getChats(body))
        .then(response =>{
            console.log('111111111',response); 
            setStartData(response.payload);
            console.log('11',response.payload);
        })

    }, [])

    const { Messages, sendMessage, setId } = useChat(roomId);
    const [newMessage, setnewMessage] = useState("");
    const [Write, setWrite] = useState("")
    
    const [StartData, setStartData] = useState([])
    
    const onDoingTyping = (event) => {
        setnewMessage(event.target.value);
        setWrite(`${UserData.userId}님이 작성중입니다....`)
    }

    useEffect(() => {
        if(newMessage===""){
            setWrite('');
        }
    }, [newMessage])

    const onSubmitMessage = () => {
        sendMessage(newMessage, UserData._id, roomId, UserData.userName, UserData.image);
        setnewMessage("");
    }


    return (
        <div className="chatting_area">
            <div className="chat_box">
                <ol>
                    {
                        StartData.map((data)=>(
                            data.sendUser._id === UserData._id ?
                            <div style={{background:'red'}}>
                                <img src={data.sendUser.image} />
                                <div>
                                    <div>{data.sendUser.userName}</div>
                                    <div>{data.message}</div>
                                </div>
                            </div>
                            :
                            <div style={{background:'blue'}}>
                                <img src={data.sendUser.image} />
                                <div>
                                    <div>{data.sendUser.userName}</div>
                                    <div>{data.message}</div>
                                </div>
                            </div>
                        ))
                    }
                </ol>
            </div>
            <div>
                <ol>
                    {
                        Messages.map((message, i)=>(
                            message.ownedByCurrentUser ? 
                            <div style={{background:'red'}}>
                                <img src={UserData.image} />
                                <div>
                                    <div>{UserData.userName}</div>
                                    <div>{message.message}</div>
                                </div>
                            </div>
                            :
                            <div style={{background:'blue'}}>
                                <img src={message.image} />
                                <div>
                                    <div>{message.userName}</div>
                                    <div>{message.message}</div>
                                </div>
                            </div>
                            // <li
                            //     key={i}
                            //     className={`message-item ${
                            //         message.ownedByCurrentUser ? "my-message" : "received-message"
                            //     }`}
                            // >
                            //     {message.message}
                            // </li>
                        ))
                    }
                </ol>
            </div>
            <input
                value={Write}
            />
            {/* <div onChange={handleNewMessageChange}><TextsmsIcon />{UserData.userName}님이 작성중입니다....</div> */}
            <textarea 
                value={newMessage}
                onChange={onDoingTyping}
                placeholder="Write message..."
                className="new-message-input-field"
            />
            <button onClick={onSubmitMessage} className="send-message-button">
                Send
            </button>
        </div>
    )
}

export default withRouter(ChatingRoom);