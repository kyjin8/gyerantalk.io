import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser, uploadImage } from "../../../api/actions/user_action";
import { Button } from '@material-ui/core';


const UpdateUser = ({UserData, history}) => {

    function plusData(e) {
        const formData = new FormData();
        formData.append('file',e.target.file.files[0]);
        formData.append('message',Message);
        return formData;
    }
    function adds(data) {
        let body = {}
        for (let value of data.values()) {
            body.Form = value
        }
        return body
    }
    function ax(body) {
        dispatch(uploadImage(body))
            .then(response => response.payload)
    }

    const dispatch = useDispatch();

    const [Id, setId] = useState(UserData.userId)
    const [Image, setImage] = useState(UserData.image)
    const [Message, setMessage] = useState(UserData.message)

    useEffect(() => {
        setId(UserData.userId);
        setImage(UserData.image);
        setMessage(UserData.message);
    }, [UserData])

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(e.target.files !== null){
            // const formData = await plusData(e);
            // // const Data = await plus(formData);
            // // const sendAxios = await uploadImage(Data);
            // let body = {
            //     formData : formData
            // }
            ///////////
            // const formData = new FormData();
            // formData.append('file',e.target.file.files[0]);
            // formData.append('message',Message);
            
            const Forms = await plusData(e);
            const add = await adds(Forms);
            const re = await ax(add);
            ///////////
            // let body = {}
            // for (let value of formData.values()) {
            //     body.Form = value
            //   }


            
        }
    }

    return (
        <div>
            <img src={Image} />
            <form name="firm"  onSubmit={handleSubmit} encType='multipart/form-data'>
                <input type="file" name="file" accept='image/jpg,impge/png,image/jpeg,image/gif' />
                <input type="text" value={Message} onChange={onChangeMessage}/>
                <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default withRouter(UpdateUser);
