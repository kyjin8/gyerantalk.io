import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ChatTitle from './ChatTitle';
import AddBaner from './AddBaner';
import { ListFind } from '../../../api/actions/socket_action';
import ChatItem from './ChatItem';

const ChatingList = ({UserData}) => {

    const dispatch = useDispatch();

    const [roomName, setRoomName ] = useState("");
    const [ListRoom, setListRoom] = useState([]);

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    useEffect(() => {
        let body = {
            _id : UserData._id
        }
        dispatch(ListFind(body))
        .then(response => {
            setListRoom(response.payload);
        });
    }, [UserData])
    
    const renderChat = () => 
        ListRoom.map( (chat)=>(
            <ChatItem key={chat} chat={chat} UserData={UserData}/>
        ))

    return (
        <div className="home-container">
            <ChatTitle />
            <AddBaner />
            {
                renderChat()
            }
            {/* <input 
                type="text"
                placeholder="Room"
                value={roomName}
                onChange={handleRoomNameChange}
                className="text-input-field"
            /> */}
            {/* <Link to={`/main/ChatingRoom/${roomName}`}>
                Join room
            </Link> */}
            
        </div>
    )
}

export default withRouter(ChatingList);