import React from 'react';
import { withRouter } from 'react-router-dom';
import '../MainPage/Main.scss';
import LeftTitle from './Title/LeftTitle';
import MyProfile from './MyProfile/MyProfile.js'


const LeftPage = (props) => {

    

    return (
        <div className="left_side">
            <LeftTitle />
            <MyProfile />
        </div>
    )
}

export default withRouter(LeftPage);
