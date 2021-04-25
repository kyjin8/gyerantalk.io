import React from 'react';
import LeftTitle from './Title/LeftTitle';
import MyProfile from './MyProfile/MyProfile';
import PlusFriend from './PlusFriend/PlusFriend';
import { withRouter } from 'react-router-dom';

const FriendList = ({UserData}) => {
    
    return (
        <div>
            <LeftTitle UserData={UserData}/>
            <MyProfile UserData={UserData}/>
            <div className="line" />
            <PlusFriend />
            <div className="line" />

        </div>
    )
}

export default withRouter(FriendList);
