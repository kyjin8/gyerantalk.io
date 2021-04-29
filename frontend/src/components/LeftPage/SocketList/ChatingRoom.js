import React, { useState, useEffect } from 'react';
import useChat from './useChat';
import { withRouter } from 'react-router-dom';
import TextsmsIcon from '@material-ui/icons/Textsms';

const ChatingRoom = ({match, UserData}) => {

    // useEffect(() => {
    //     let server = "http://localhost:4000";
        
    // }, [input])

    const roomId = match.params.search;

    const { Messages, sendMessage } = useChat(roomId);
    const [newMessage, setnewMessage] = useState("");
    const [Write, setWrite] = useState("")
    
    const handleNewMessageChange = (event) => {
        setnewMessage(event.target.value);
        setWrite(`${UserData.userId}님이 작성중입니다....`)
    }

    useEffect(() => {
        if(newMessage===""){
            setWrite('');
        }
    }, [newMessage])



    const handleSendMessage = () => {
        sendMessage(newMessage);
        setnewMessage("");
    }

    return (
        <div>
            <h1>Room : {roomId}</h1>
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
                                {message.body}
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
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field"
            />
            <button onClick={handleSendMessage} className="send-message-button">
                Send
            </button>
        </div>
    )
}

export default withRouter(ChatingRoom);