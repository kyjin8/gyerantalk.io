import React, { useState, useEffect } from 'react';
import useChat from './useChat';
import { withRouter } from 'react-router-dom';
import TextsmsIcon from '@material-ui/icons/Textsms';
import { useDispatch, useSelector } from 'react-redux';
import { getChats } from '../../../api/actions/socket_action';
import '../../MainPage/Main.scss';
import { checkMember } from '../../../api/actions/chat_action';

const ChatingRoom = ({match, UserData},props) => {

    const dispatch = useDispatch();
    const [roomId, setroomId] = useState(match.params.search);
    const [Body, setBody] = useState("");
    const [changeRoom, setchangeRoom] = useState("")

    // const roomId = match.params.search;
    const checkMembers = match.params.search.split('_');
// 민기_예진

// 예진_민기
    useEffect(()=>{
        let member = {
            one: checkMembers[0],
            two: checkMembers[1],
        };
        dispatch(checkMember(member))
            .then(response => {
                if(match.params.search !== response.payload.url){
                    window.location.assign(`/main/ChatingRoom/${response.payload.url}`);
                    
                }
                else{
                    console.log('시발');
                    setroomId(response.payload.url)
                    setBody({
                        roomId: response.payload.url
                    })

                }
                
            })
    },[match])
    useEffect(()=>{
        dispatch(getChats(Body))
            .then(response => {
                setStartData(response.payload);
                console.log(response.payload, '두번째');
            })
    },[Body])
    useEffect(()=>{
        setchangeRoom(roomId);
    },[roomId])

    const { Messages, sendMessage, setId } = useChat(changeRoom);
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
        sendMessage(newMessage, UserData._id, changeRoom, UserData.userName, UserData.image);
        setnewMessage("");
    }


    return (
        <div className="chatting_area">
            <div className="chat_inside">
                <div className="chat_box">
                    <ol>
                        {
                            StartData.map((data)=>(
                                data.sendUser._id === UserData._id ?
                                <div className="talk_box">
                                    <div className="say">
                                        <span className="span_name">{data.sendUser.userName}</span>
                                        <span className="span_mess">{data.message}</span>
                                    </div>
                                    <img className="user_img" src={data.sendUser.image} />
                                </div>
                                :
                                <div className="talk_box1">
                                    <img className="user_img1" src={data.sendUser.image} />
                                    <div className="say1">
                                        <span className="span_name1">{data.sendUser.userName}</span>
                                        <span className="span_mess1">{data.message}</span>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            Messages.map((message, i)=>(
                                message.ownedByCurrentUser ? 
                                <div className="talk_box">
                                    <div className="say">
                                        <span className="span_name">{UserData.userName}</span>
                                        <span className="span_mess">{message.message}</span>
                                    </div>
                                    <img className="user_img" src={UserData.image} />
                                </div>
                                :
                                <div className="talk_box1">
                                    <img className="user_img1" src={message.image} />
                                    <div className="say1">
                                        <span className="span_name1">{message.userName}</span>
                                        <span className="span_mess1">{message.message}</span>
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
            </div>
            {/* <input
                value={Write}
            /> */}
            {/* <div onChange={handleNewMessageChange}><TextsmsIcon />{UserData.userName}님이 작성중입니다....</div> */}
            {/* <textarea 
                value={newMessage}
                onChange={onDoingTyping}
                placeholder="Write message..."
                className="new-message-input-field"
            /> */}
            <div className="btns">
                <input
                    className="chat_input"
                    value={newMessage}
                    onChange={onDoingTyping}
                    placeholder="메시지를 작성하세요"
                />
                <button onClick={onSubmitMessage} className="send-message-button">
                    Send
                </button>
            </div>
        </div>
    )
}

export default withRouter(ChatingRoom);