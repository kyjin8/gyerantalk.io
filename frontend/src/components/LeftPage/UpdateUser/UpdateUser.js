import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from "../../../api/actions/user_action";
import { Button } from '@material-ui/core';

const UpdateUser = ({UserData, history}) => {
    const dispatch = useDispatch();

    const userNick = UserData.userNickName;
    const userMessage = UserData.message;
    const [inputs, setInputs] = useState({
        nick: '',
        message: '',
    })
    const [img, setImage] = useState(null)

    const {nick, message} = inputs

    const onChange = (e) => {
        const {className, value} = e.target
        const nextInputs = {
            ...inputs,
            [className] : value,
        }
        setInputs(nextInputs)
    }
    const onChangeImg = (e) => {
        const formData = new FormData();
        formData.append('file', img);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            userId : UserData.userId,
            userNickName: inputs.nick,
            message: inputs.message
        }
        console.log('asd;klfj', body);
        dispatch(updateUser(body))
        .then(response => {
            if(response.payload.success){
                console.log('성공');
                history.push('/main/FriendList');
            }else{
                alert('Error');
            }
        })
    }

    const btnstyle ={
        margin : '18px 0',
        fontWeight : 'bolder',
        color : '#fff',
        backgroundColor : '#845460'
    }

    return (
        <div className="update_user">
            <div>프로필 수정</div>
            <form onSubmit={onSubmitHandler} encType="multipart/form-data">
                <label className="profile_img_wrapper" for="uploadfile">
                    <img src={UserData.image} />
                </label>
                <input type="file" name="uploadfile" class="uploadfile" accept='image/jpg,impge/png,image/jpeg,image/gif' value="" />
                {/* <input type="text" placeholder={userNick} value={Input1} ref={inputEl1}/>
                <input type="text" placeholder={userMessage} value={Input2} ref={inputEl2}/> */}
                <input className="nick" type="text" placeholder={userNick} value={nick} onChange={onChange}/>
                <input className="message" type="text" placeholder={userMessage} value={message} onChange={onChange}/>
                <Button type="submit" style={btnstyle} variant="contained" fullWidth>수정 완료</Button>
            </form>
        </div>
    )
}

export default withRouter(UpdateUser);
