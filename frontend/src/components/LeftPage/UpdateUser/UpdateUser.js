import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser, uploadImage, uploadImageTmp } from "../../../api/actions/user_action";
import { Button } from '@material-ui/core';
import '../../MainPage/Main.scss';

const UpdateUser = ({UserData, history, setUpdate, Update}) => {
    const dispatch = useDispatch();

    const [image, setImage] = useState(UserData.image);
    const [FilePath, setFilePath] = useState("")
    const [inputs, setInputs] = useState({
        nick: UserData.userNickName,
        message: UserData.message,
    })
    const {nick, message} = inputs

    useEffect(() => {
        setInputs({
            nick: UserData.userNickName,
            message: UserData.message,
        })
    }, [UserData])
    useEffect(() => {
        setImage(UserData.image);
    }, [UserData, image]);

    const onSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        console.log('온체인지파일',e.target.nick.value, e.target.message.value, e.target.profile_img.files[0])
        formData.append('userId', UserData.userId)
        formData.append('nick', e.target.nick.value)
        formData.append('message', e.target.message.value)
        formData.append('profile_img', e.target.profile_img.files[0])

        dispatch(updateUser(formData))
        .then(response=>{
            history.push('/main/FriendList')
            setUpdate(!Update)
        })
    }
    const onChange = (e) => {
        const {className, value} = e.target
        const nextInputs = {
            ...inputs,
            [className] : value,
        }
        setInputs(nextInputs)
    }

    const btnstyle ={
        margin : '18px 0',
        fontWeight : 'bolder',
        color : '#fff',
        backgroundColor : '#845460'
    }

    return (
        <div className="change_update">
            <div className="change">프로필 수정</div>
            <div className="form_change">
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <label className="profile_img_wrapper" htmlFor="profile_img">
                        <img src={image} />
                    </label>
                    <input type="file" name='profile_img' accept='image/jpg, image/png, image/jpeg, image/gif' multiple={false} />
                    <input className="nick" type="text" value={nick} onChange={onChange} name="nick"/>
                    <input className="message" type="text" value={message} onChange={onChange} name="message"/>
                    <Button type="submit" style={btnstyle} variant="contained" fullWidth>수정 완료</Button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(UpdateUser);