import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const MyProfile = ({UserData}) => {

    return (
        <div className="myProfile">
            <img src={UserData.image} />
            <div className="text_site">
                <div className="top">{UserData.userName}</div>
                <div className="bottom"> 상태 메시지 </div>
            </div>
        </div>
    )
}

export default withRouter(MyProfile);
