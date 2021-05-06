import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import LeftPage from '../LeftPage/LeftPage';
import { getUser } from '../../api/actions/main_action';

const Main = (props) => {

    const dispatch = useDispatch();

    const [UserData, setUserData] = useState("");
    // const [ListFriend, setListFriend] = useState("");
    const [Update, setUpdate] = useState(false);

    // const onClickHandler = () =>{
    //     axios.get('/api/users/logout')
    //     .then(response => {
    //         if(response.data.success){
    //             props.history.push("/");
    //         }else{
    //             alert('로그아웃 하는데 실패 했습니다.');
    //         }
    //     })
    // }
    
    useEffect(()=>{
        dispatch(getUser())
        .then(response => {
            setUserData(response.payload);
        })
    },[])

    useEffect(() => {
        dispatch(getUser())
        .then(response => {
            setUserData(response.payload);
        })
    }, [Update])

    return (
        <div className="container">
            <div className="box">
                <LeftPage props={props} UserData={UserData} Update={Update} setUpdate={setUpdate}/>
                {/* <div className="right_side">
                    dddd
                </div> */}
                {/* <button style={{marginLeft:'10px'}} onClick={onClickHandler}>
                    로그아웃
                </button> */}
            </div>
        </div>

    )
}

export default withRouter(Main);