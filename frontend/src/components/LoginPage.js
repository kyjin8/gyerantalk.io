import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import { loginUser } from '../../../_actions/user_action';
// import { withRouter } from 'react-router-dom';

const LoginPage = (props) => {

    // const dispatch = useDispatch();

    const [UserId, setUserId] = useState("");
    const [Password, setPassword] = useState("");

    const onUserIdHandler = (e) => {
        setUserId(e.target.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            userId : UserId,
            password : Password,
        }
        console.log(body);
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>UserId</label>
                <input type="text" value={UserId} onChange={onUserIdHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    login
                </button>
            </form>
        </div>
    )
}

export default LoginPage;
