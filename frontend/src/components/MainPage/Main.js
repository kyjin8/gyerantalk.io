import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import LeftPage from '../LeftPage/LeftPage';

const Main = (props) => {

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

    return (
        <div className="container">
            <div className="box">
                <LeftPage props={props}/>
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
