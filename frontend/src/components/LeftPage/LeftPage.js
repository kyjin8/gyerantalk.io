import React, { useState } from 'react';
import { withRouter, NavLink, Route } from 'react-router-dom';
import '../MainPage/Main.scss';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FriendList from './FriendList/FriendList.js';
import Chat from './ChatList/Chat';
import UpdateUser from './UpdateUser/UpdateUser';
// import UpdateUser from './UpdateUser/UpdateUser_tmp';
// import UpdateUser from './UpdateUser/UpdateTest';
import Internet from './Internet/Internet';
import ChatingList from './SocketList/ChatingList';
import ChatingRoom from './SocketList/ChatingRoom';
import ViewFriend from './ViewFriend/ViewFriend';
import Options from './Options/Options';

const LeftPage = ({match, UserData, Update, setUpdate}) => {
// 잠시 ListFriend props에 빼고 밑에 FriendList 페이지에 상속 지움
    const data = match.params.category || 'FriendList';

    const [checktUpdate, setchecktUpdate] = useState(false);

    return (
        <div className="left_side">
            <div className="left_category">
                <NavLink className="default_active" activeClassName="active" to="/main/FriendList">
                    <PersonIcon style={{ fontSize: 30 }} />
                </NavLink>
                {/* <NavLink className="default_active" activeClassName="active" to="/main/ChatList">
                    <QuestionAnswerRoundedIcon style={{ fontSize: 30 }} />
                </NavLink> */}
                <NavLink className="default_active" activeClassName="active" to="/main/ChatingList">
                    <QuestionAnswerRoundedIcon style={{ fontSize: 30 }} />
                </NavLink>
                <NavLink className="default_active" activeClassName="active" to="/main/Internet">
                    <LanguageIcon style={{ fontSize: 30 }} />
                </NavLink>
                <NavLink className="default_active" activeClassName="active" to="/main/Options">
                    <MoreHorizIcon style={{ fontSize: 30 }} />
                </NavLink>
            </div>
            {data === 'FriendList' ? <FriendList UserData={UserData} /> : null}
            {/* {data === 'ChatList' ? <Chat UserData={UserData}/> : null}       */}
            {data === 'ChatingList' && <ChatingList UserData={UserData} checktUpdate={checktUpdate} setchecktUpdate={setchecktUpdate} /> }
            {data === 'ChatingRoom' && <ChatingRoom UserData={UserData} checktUpdate={checktUpdate} setchecktUpdate={setchecktUpdate} /> }
            {data === 'UpdateUser' && <UpdateUser UserData={UserData} Update={Update} setUpdate={setUpdate}/> }
            {data === 'Internet' && <Internet UserData={UserData}/> }
            {data === 'ViewFriend' && <ViewFriend UserData={UserData} /> }
            {data === 'Options' && <Options UserData={UserData}/> }
        </div>
    )
}

export default withRouter(LeftPage);
