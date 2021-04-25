import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../MainPage/Main.scss';
import {
    SearchOutlined,
    UserAddOutlined
} from '@ant-design/icons';

const LeftTitle = () => {

    const [Search, setSearch] = useState(false);
    const [Friend, setFriend] = useState(false);
    const [InputText, setInputText] = useState("");
    const [InputText2, setInputText2] = useState("");

    const inputEl = useRef(null);
    const inputEl2 = useRef(null);

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
    const onInputTextHandler2 = (e) =>{
        setInputText2(e.target.value);
    }

    useEffect(() => {
        if(Search) inputEl.current.focus();
        if(Friend) inputEl2.current.focus();
    }, [Search, Friend])

    return (
        <div className="left_title">
            <div>친구</div>
            <div className="search_friend">
                {Search ? <input type="text" placeholder="친구검색" value={InputText} ref={inputEl} onChange={onInputTextHandler}/> : null}
                {Friend ? <input type="text" placeholder="친구추가" value={InputText2} ref={inputEl2} onChange={onInputTextHandler2}/> : null}
                <SearchOutlined onClick={onToggle}/>
                <UserAddOutlined onClick={onToggle2} className="add_friend"/>
            </div>
        </div>
    )
}

export default withRouter(LeftTitle);
