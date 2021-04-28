import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser, uploadImage } from "../../../api/actions/user_action";
import { Button } from '@material-ui/core';


const UpdateUser = ({UserData, history}) => {

    const dispatch = useDispatch();
    
    function image_get(e) {
        console.log('image_get 실행')
        const formData = new FormData();
        formData.append('nickname',e.target.nick);
        formData.append('message',e.target.message);
        formData.append('profile_img',e.target.profile_img[0]);
        return formData;
    }
    
    function image_upload(formData) {
        console.log('image_upload 실행',formData)
        dispatch(uploadImage(formData))
        .then(response => console.log('111111111111',response.payload))

        return console.log(formData);
    }

    const [inputs, setInputs] = useState({
        nick: UserData.userNickName,
        message: UserData.message,
    })
<<<<<<< HEAD
    const [image, setImage] = useState(UserData.image); //
    useEffect(() => {
        setImage(UserData.image)
    }, [UserData, image])
=======
    useEffect(() => {
        setInputs({
            nick: UserData.userNickName,
            message: UserData.message,
        })
    }, [UserData])

    const [image, setImage] = useState(UserData.image);

    useEffect(() => {
        setImage(UserData.image)
    }, [UserData, image])

>>>>>>> minmin
    const {nick, message} = inputs

    const onChange = (e) => {
        const {className, value} = e.target
        const nextInputs = {
            ...inputs,
            [className] : value,
        }
        setInputs(nextInputs)
    }
    // const onChangeImg = (e) => {
    //     const formData = new FormData();
    //     formData.append('file', img)
    // }
<<<<<<< HEAD
=======
    const onChangeImg = (e) => {
        console.log('1111',e.target.files[0])
        setImage(e.target.files[0]);
    }
>>>>>>> minmin
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = await image_get(e);
        const a = await image_upload(formData);
        // let body = {
        //     userId : UserData.userId,
        //     userNickName: inputs.nick,
        //     message: inputs.message
        // }
        // console.log('asd;klfj', body);
        // dispatch(updateUser(body))
        // .then(response => {
        //     if(response.payload.success){
        //         console.log('성공');
        //         history.push('/main/FriendList');
        //     }else{
        //         alert('Error');
        //     }
        // })
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
<<<<<<< HEAD
=======
                {/* <label className="profile_img_wrapper" for="profile_img">
                    <img src={image} />
                </label> */}
>>>>>>> minmin
                <img src={image} />
                {/* <input type="file" name="uploadfile" class="uploadfile" accept='image/jpg,impge/png,image/jpeg,image/gif' value="" />
                 <input type="text" placeholder={userNick} value={Input1} ref={inputEl1}/>
                <input type="text" placeholder={userMessage} value={Input2} ref={inputEl2}/> */}
<<<<<<< HEAD
                <input type="file" accept='image/jpg,impge/png,image/jpeg,image/gif' name='profile_img'/>
=======
                <input type="file" accept='image/jpg,impge/png,image/jpeg,image/gif' onChange={onChangeImg} name='profile_img'/>
>>>>>>> minmin
                <input className="nick" type="text" value={nick} onChange={onChange} name="nick"/>
                <input className="message" type="text" value={message} onChange={onChange} name="message"/>
                <Button type="submit" style={btnstyle} variant="contained" fullWidth>수정 완료</Button>
            </form>
        </div>
    )
}

export default withRouter(UpdateUser);

// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { updateUser, uploadImage } from "../../../api/actions/user_action";
// import { Button } from '@material-ui/core';
// import axios from 'axios';


// const UpdateUser = ({UserData, history}) => {

//     const dispatch = useDispatch();
    
//     function image_get(e) {
//         console.log('image_get 실행')
//         const formData = new FormData();
//         formData.append('nickname',e.target.nick);
//         formData.append('message',e.target.message);
//         formData.append('profile_img',e.target.profile_img[0]);
//         return formData;
//     }
    
//     function image_upload(formData) {
//         console.log('image_upload 실행',formData)
//         dispatch(uploadImage(formData))
//         .then(response => console.log('111111111111',response.payload))

//         return console.log(formData);
//     }

//     const [inputs, setInputs] = useState({
//         nick: UserData.userNickName,
//         message: UserData.message,
//     })
//     const [image, setImage] = useState(UserData.image);

//     useEffect(() => {
//         setInputs({
//             nick: UserData.userNickName,
//             message: UserData.message,
//         })
//     }, [UserData])
//     useEffect(() => {
//         setImage(UserData.image)
//     }, [UserData, image])

//     const {nick, message} = inputs

//     // const onChange = (e) => {
//     //     const {className, value} = e.target
//     //     const nextInputs = {
//     //         ...inputs,
//     //         [className] : value,
//     //     }
//     //     setInputs(nextInputs)
//     // }
//     // const onChangeImg = (e) => {
//     //     const formData = new FormData();
//     //     formData.append('file', img)
//     // }
//     const onChangeImg = (e) => {
//         console.log('1111',e.target.files[0])
//         setImage(e.target.files[0]);
//     }
//     const onClick = async () => {
//         const formData = new FormData();
//         formData.append('file', image);
//         //서버의 upload API 호출
//         // const res = await axios.post('/api/users/upload', formData);
//         // console.log(res);
//         dispatch(uploadImage(formData));
//     }
//     // const onSubmitHandler = async (e) => {
//     //     e.preventDefault();
//     //     const formData = await image_get(e);
//     //     const a = await image_upload(formData);
//     //     // let body = {
//     //     //     userId : UserData.userId,
//     //     //     userNickName: inputs.nick,
//     //     //     message: inputs.message
//     //     // }
//     //     // console.log('asd;klfj', body);
//     //     // dispatch(updateUser(body))
//     //     // .then(response => {
//     //     //     if(response.payload.success){
//     //     //         console.log('성공');
//     //     //         history.push('/main/FriendList');
//     //     //     }else{
//     //     //         alert('Error');
//     //     //     }
//     //     // })
//     // }

//     const btnstyle ={
//         margin : '18px 0',
//         fontWeight : 'bolder',
//         color : '#fff',
//         backgroundColor : '#845460'
//     }

//     return (
//         <div className="update_user">
//             <div>프로필 수정</div>
//             {/* <form onSubmit={onSubmitHandler} encType="multipart/form-data"> */}
//                 <img src={image} />
//                 <input type="file" accept='image/jpg,impge/png,image/jpeg,image/gif' onChange={onChangeImg} name='profile_img'/>
//                 {/* <input type="img" onChange={onChangeImg}/> */}
//                 <button onClick={onClick}>제출</button>
//                 {/* <input className="nick" type="text" value={nick} onChange={onChange} name="nick"/>
//                 <input className="message" type="text" value={message} onChange={onChange} name="message"/>
//                 <Button type="submit" style={btnstyle} variant="contained" fullWidth>수정 완료</Button> */}
//             {/* </form> */}
//         </div>
//     )
// }

// export default withRouter(UpdateUser);

