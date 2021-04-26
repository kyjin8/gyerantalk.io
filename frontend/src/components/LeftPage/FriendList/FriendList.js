import React, { useState } from 'react';
import LeftTitle from './Title/LeftTitle';
import MyProfile from './MyProfile/MyProfile';
import PlusFriend from './PlusFriend/PlusFriend';
import { withRouter } from 'react-router-dom';

const FriendList = ({UserData}) => {

    const [Search, setSearch] = useState(false);
    const [Friend, setFriend] = useState(false);
    const [FriendClick, setFriendClick] = useState(false);
    const [InputText, setInputText] = useState("");
    const [InputText2, setInputText2] = useState("");

    const onToggle = () =>{
        setSearch(!Search);
        setFriend(false);
        setFriendClick(false);
    }
    const onToggle2 = () =>{
        setFriend(!Friend);
        setSearch(false);
        setFriendClick(false);
    }
    const onToggle3 = () =>{
        setFriendClick(!Friend);
        setFriend(!Friend);
        setSearch(false);
    }
    const onInputTextHandler = (e) =>{
        setInputText(e.target.value);
    }
    const onInputTextHandler2 = (e) =>{
        setInputText2(e.target.value);
    }
    
    return (
        <div>
            <LeftTitle 
                Search={Search}
                Friend={Friend}
                FriendClick={FriendClick}
                InputText={InputText}
                InputText2={InputText2}
                onToggle={onToggle}
                onToggle2={onToggle2}
                onInputTextHandler={onInputTextHandler}
                onInputTextHandler2={onInputTextHandler2}
            />
            <MyProfile
                UserData={UserData}
            />
            <div className="line" />
            <PlusFriend 
                onToggle3={onToggle3}
            />
            <div className="line" />

        </div>
    )
}

export default withRouter(FriendList);
