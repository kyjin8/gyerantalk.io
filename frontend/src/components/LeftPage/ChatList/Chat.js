import React, { useState, Component } from 'react';
import { Button, Input } from '@material-ui/core';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import io from "socket.io-client";
import { connect } from 'react-redux';
import moment from 'moment';

export class Chat extends Component {
    state = {
        chatMessage: "",
    }

    componentDidMount(){
        let server = 'http://localhost:4000';

        this.socket = io(server);

        this.socket.on("Output Chat Message", messageFromBackend => {
            console.log(messageFromBackend);
        })

    }

    handleSearchChange = (e) => {
        this.setState({
            chatMessage : e.target.value,
        })
    }
    submitChatMessage = (e) => {
        e.preventDefault();

        let chatMessage = this.state.chatMessage;
        let _id = this.props.user.userData._id;
        let userName = this.props.user.userData.userName;
        let userImage = this.props.user.userData.image;
        let nowTime = moment();
        let type = "Image";

        this.socket.emit("Input Chat Message", {
            chatMessage,
            _id,
            userName,
            userImage,
            nowTime,
            type,
        });
        this.setState({ chatMessage : ""});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitChatMessage}>
                    <Input
                        id="message"
                        color="secondary"
                        placeholder="메세지를 작성하세요"
                        inputProps={{ 'aria-label': 'description' }}
                        value={this.state.chatMessage}
                        onChange={this.handleSearchChange}
                    />
                    <Button variant="outlined" color="secondary" type="submit" onClick={this.submitChatMessage}>
                        <SubdirectoryArrowLeftIcon />
                    </Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Chat);
