import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ChatTitle from './ChatTitle';
import AddBaner from './AddBaner';
import { ListFind } from '../../../api/actions/socket_action';
import ChatItem from './ChatItem';

const ChatingList = React.memo(({UserData, checktUpdate, setchecktUpdate}) => {

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
    }, [UserData, checktUpdate])
    
    // let renderChat = () => 
    //     ListRoom.map( (chat)=>(
    //         <ChatItem key={chat} chat={chat} UserData={UserData} checktUpdate={checktUpdate} setchecktUpdate={setchecktUpdate}/>
    //     ))

    return (
        <div className="home-container">
            <ChatTitle />
            <AddBaner />
            {
                ListRoom.map( (chat)=>(
                    <ChatItem key={chat} chat={chat} UserData={UserData} checktUpdate={checktUpdate} setchecktUpdate={setchecktUpdate}/>
                ))
            }
        </div>
    )
})

export default withRouter(ChatingList);