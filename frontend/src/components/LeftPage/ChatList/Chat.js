import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import io from "socket.io-client";

const Chat = () => {

    const [chatMessage, setchatMessage] = useState("");

    useEffect(() => {
        let server = 'http://localhost:4000';
        
    }, [])

    return (
        <div>
            <Input color="secondary" placeholder="메세지를 작성하세요" inputProps={{ 'aria-label': 'description' }} />
            <Button variant="outlined" color="secondary">
                <SubdirectoryArrowLeftIcon />
            </Button>
        </div>
    )
}

export default Chat;
