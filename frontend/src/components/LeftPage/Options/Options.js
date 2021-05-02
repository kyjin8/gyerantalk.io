import React from 'react';
import axios from 'axios';
import TelegramIcon from '@material-ui/icons/Telegram';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ChatIcon from '@material-ui/icons/Chat';
import Weather from './option/Weather';
const Options = ({UserData}) => {

    const onClickHandler = () =>{
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success){
                window.location.assign('/');
            }else{
                alert('로그아웃 하는데 실패 했습니다.');
            }
        })
    }

    return (
        <div>
            <div>
                <TelegramIcon /> 대화하기
                <PeopleAltIcon /> 친구목록
                <AnnouncementIcon /> 뉴스
                <ShoppingCartIcon /> 쇼핑
                <LiveTvIcon /> Egg TV
                <ChatIcon /> Egg Board
            </div>
            <button style={{marginLeft:'10px'}} onClick={onClickHandler}>
                    로그아웃
            </button>
            <Weather UserData={UserData}/>
        </div>
    )
}

export default Options
