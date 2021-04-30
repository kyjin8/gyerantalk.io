import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const ChatingList = ({UserData}) => {

    const [roomName, setRoomName ] = useState("");

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    return (
        <div className="home-container">
            <div>채팅</div>
            <input 
                type="text"
                placeholder="Room"
                value={roomName}
                onChange={handleRoomNameChange}
                className="text-input-field"
            />
            <Link to={`/main/ChatingRoom/${roomName}`}>
                Join room
            </Link>
        </div>
    )
}

export default withRouter(ChatingList);