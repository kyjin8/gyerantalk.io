import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import {
    SearchOutlined,
    UserAddOutlined
} from '@ant-design/icons';

const Main = (props) => {

    const [Search, setSearch] = useState(false);
    const [Friend, setFriend] = useState(false)
    const [InputText, setInputText] = useState("")

    const inputEl = useRef(null);
    const inputEl2 = useRef(null);

    const onClickHandler = () =>{
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success){
                props.history.push("/");
            }else{
                alert('로그아웃 하는데 실패 했습니다.');
            }
        })
    }
    const onToggle = () =>{
        setSearch(!Search);
        setFriend(false);
    }
    const onToggle2 = () =>{
        setFriend(!Friend);
        setSearch(false);
    }
    const onInputTextHandler = (e) =>{
        setInputText(e.target.value);
    }

    useEffect(() => {
        if(Search) inputEl.current.focus();
        if(Friend) inputEl2.current.focus();
    }, [Search])

    return (
        <div className="container">
            <div className="box">
                <div className="left_side">
                    <div className="left_title">
                        <div>친구</div>
                        <div className="search_friend">
                            {Search ? <input type="text" placeholder="친구검색" value={InputText} ref={inputEl} onChange={onInputTextHandler}/> : null}
                            {Friend ? <input type="text" placeholder="친구추가" value={InputText} ref={inputEl2} onChange={onInputTextHandler}/> : null}
                            <SearchOutlined onClick={onToggle}/>
                            <UserAddOutlined onClick={onToggle2} className="add_friend"/>
                        </div>
                    </div>
                    <div className="user_profile">

                    </div>
                </div>
                {/* <div className="right_side">
                    dddd
                </div> */}
                <button onClick={onClickHandler}>
                        로그아웃
                </button>
            </div>
        </div>

    )
}

export default withRouter(Main);
