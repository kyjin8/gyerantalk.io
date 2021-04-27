import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import LeftPage from '../LeftPage/LeftPage';
import { getUser } from '../../api/actions/main_action';
import { getFriendList } from '../../api/actions/friend_action';

const Main = (props) => {

    const dispatch = useDispatch();

    const [UserData, setUserData] = useState("");
    // const [ListFriend, setListFriend] = useState("");

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
    
    useEffect(()=>{
        dispatch(getUser())
        .then(response => {
            setUserData(response.payload);

            // let body = {
            //     userId : response.payload.userId
            // }

            // dispatch(getFriendList(body))
            // .then(response => {
            //     setListFriend(response.payload);
            //     console.log(response.payload)
            // })
        })
    },[])

    return (
        <div className="container">
            <div className="box">
                <LeftPage props={props} UserData={UserData}/>
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
