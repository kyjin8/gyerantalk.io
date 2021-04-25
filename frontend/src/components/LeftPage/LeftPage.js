import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../MainPage/Main.scss';
import Category from './Category_bar/Category';
import FriendList from './FriendList/FriendList.js';

const LeftPage = (props) => {

    const [Profile, setProfile] = useState("")

    return (
        <div className="left_side">
            <Category />
            <FriendList />
        </div>
    )

}

export default withRouter(LeftPage);
