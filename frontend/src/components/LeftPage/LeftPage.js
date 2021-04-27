import React, { useState } from 'react';
import { withRouter, NavLink, Route } from 'react-router-dom';
import '../MainPage/Main.scss';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FriendList from './FriendList/FriendList.js';
import ChatList from './ChatList/ChatList';
import UpdateUser from './UpdateUser/UpdateUser';
import Internet from './Internet/Internet';

const LeftPage = ({match, UserData, ListFriend}) => {

    const data = match.params.category || 'FriendList';

    return (
        <div className="left_side">
            <div className="left_category">
                <NavLink className="default_active" activeClassName="active" to="/main/FriendList">
                    <PersonIcon style={{ fontSize: 30 }} />
                </NavLink>
                <NavLink className="default_active" activeClassName="active" to="/main/ChatList">
                    <QuestionAnswerRoundedIcon style={{ fontSize: 30 }} />
                </NavLink>
                <NavLink className="default_active" activeClassName="active" to="/main/Internet">
                    <LanguageIcon style={{ fontSize: 30 }} />
                </NavLink>
                <MoreHorizIcon style={{ fontSize: 30 }} />
            </div>
            {data === 'FriendList' ? <FriendList UserData={UserData} ListFriend={ListFriend}/> : null}
            {data === 'ChatList' ? <ChatList UserData={UserData}/> : null}
            {data === 'UpdateUser' ? <UpdateUser UserData={UserData}/> : null}
            {data === 'Internet' ? <Internet UserData={UserData}/> : null}
        </div>
    )
}

export default withRouter(LeftPage);
