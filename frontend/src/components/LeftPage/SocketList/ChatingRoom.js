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

        dispatch(getChats(roomId))
        .then(response =>{
            console.log(response); 
            setStartData(response.data);   
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
        sendMessage(newMessage, UserData._id, roomId);
        setnewMessage("");
    }


    return (
        <div>
            <h1>Room : {roomId}</h1>
            {/* <div>
                <ol>
                    {props.socket.chats !== [] ?
                        props.socket.chats.map((data)=>(
                            <div>안녕</div>
                        ))
                        :
                        <div>잘과</div>
                    }
                </ol>
            </div> */}
            <div>
                <ol>
                    {
                        Messages.map((message, i)=>(
                            <li
                                key={i}
                                className={`message-item ${
                                    message.ownedByCurrentUser ? "my-message" : "received-message"
                                }`}
                            >
                                {message.message}
                            </li>
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