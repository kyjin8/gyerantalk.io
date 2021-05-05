import React, {useEffect, useRef, useState} from 'react';
import socketIOClient from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = (roomId, checktUpdate, setchecktUpdate) => {

    const [Messages, setMessages] = useState([]);
    const socketRef = useRef();
    
    useEffect(() => {

        // 웹소켓 연결을 한다
        socketRef.current = socketIOClient(SOCKET_SERVER_URL,{
            query : { roomId },
        });

        // 들어오는 메시지를 듣는다
        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser : message.senderId === socketRef.current.id,
            };
            setMessages((messages)=>[...messages, incomingMessage]);
            setchecktUpdate(!checktUpdate);
        });

        // 소켓 연결이 끝나면 부순다
        return () => { 
            socketRef.current.disconnect();
        }

    }, [roomId])

    // 같은 방에 있는 유저들에게 메세지를 전송한다
    const sendMessage = (messageBody, Id, roomId, userName, image, anoter) => {
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            message: messageBody,
            senderId: socketRef.current.id,
            sendUser : Id,
            roomName : roomId,
            userName : userName,
            image : image,
            user : Id,
            toUser : anoter,
        })
    }



    return { Messages, sendMessage, checktUpdate, setchecktUpdate}
}

export default useChat;