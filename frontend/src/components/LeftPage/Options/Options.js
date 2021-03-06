import React from 'react';
import axios from 'axios';
import TelegramIcon from '@material-ui/icons/Telegram';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ChatIcon from '@material-ui/icons/Chat';
import Weather from './option/Weather';
import {Link} from 'react-router-dom';
import '../../MainPage/Main.scss';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

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
        <div className="option_container">
            <div className="option_box">
                <div className="option_list1">
                    <Link to="/main/ChatingList">
                        <ul>
                            <li><TelegramIcon /></li>
                            <li>대화</li>
                        </ul>
                    </Link>
                    <Link to="/main/FriendList">
                        <ul>
                            <li><PeopleAltIcon /></li>
                            <li>친구</li>
                        </ul>
                    </Link>
                    <Link to="/main/Bucket">
                        <ul>
                            <li><ShoppingBasketIcon /></li>
                            <li>주문내역</li>
                        </ul>
                    </Link>
                </div>
                <div className="option_list2">
                    <Link to="/main/Internet/Shop">
                        <ul>
                            <li><ShoppingCartIcon /></li>
                            <li>쇼핑</li>
                        </ul>
                    </Link>
                    <Link to="/main/Internet/TV">
                        <ul>
                            <li><LiveTvIcon /></li>
                            <li>TV</li>
                        </ul>
                    </Link>
                    <Link to="/main/Internet/posts">
                        <ul>
                            <li><ChatIcon /></li>
                            <li>게시판</li>
                        </ul>
                    </Link>
                </div>
                {/* <TelegramIcon /> 대화하기
                <PeopleAltIcon /> 친구목록
                <AnnouncementIcon /> 뉴스
                <ShoppingCartIcon /> 쇼핑
                <LiveTvIcon /> Egg TV
                <ChatIcon /> Egg Board */}
            </div>
            
            <Weather UserData={UserData}/>
            <div className="egg_cont">
                <img className="egg_box" src="/gyeran_height_cut.png" /><br/>
                항상 계란톡을 이용해주셔서 감사합니다.
            </div>
            <div className="log_cont">
                <button className="egg_log" onClick={onClickHandler}>
                        로그아웃
                </button>
            </div>
        </div>
    )
}

export default Options
