import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { registerUser, checkId, checkNick, checkPhone } from '../api/actions/user_action';
import { withRouter } from 'react-router-dom';
import { Grid, Paper, Avatar, FormControlLabel, Checkbox, TextField, Button, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {

    const dispatch = useDispatch();

    const [UserId, setUserId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [NickName, setNickName] = useState("");
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [checkPassword, setcheckPassword] = useState(true);
    const [NoticeId, setNoticeId] = useState("");
    const [NoticeNick, setNoticeNick] = useState("");
    const [NoticePhone, setNoticePhone] = useState("");
    // const [Checking, setChecking] = useState(0);
    const [isCheckedId, setisCheckedId] = useState(false);
    const [isCheckedNick, setisCheckedNick] = useState(false);
    const [isCheckedPhone, setisCheckedPhone] = useState(false);
    const [isCheckedPassword, setisCheckedPassword] = useState(false);


    const onUserIdHandler = (e) => {
        setUserId(e.target.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const onPasswordHandler2 = (e) => {
        setConfirmPassword(e.target.value);
    }
    const onNickNameHandler = (e) => {
        setNickName(e.target.value);
    }
    const onNameHandler = (e) => {
        setName(e.target.value);
    }
    const onPhoneHandler = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)){
            setPhone(e.target.value);
        }
    }
    const onCheckIdHandler = (e) => {

        e.preventDefault();
        let body = {
            userId : UserId,
        }

        dispatch(checkId(body))
        .then(response => {
            setNoticeId(response.payload.message);
            if(response.payload.checkId){
                setisCheckedId(true)
            } else {
                setisCheckedId(false)
            }
        })
    }
    const onCheckNick = (e) => {
        
        e.preventDefault();
        let body = {
            userNickName : NickName,
        }

        dispatch(checkNick(body))
        .then(response => {
            setNoticeNick(response.payload.message);
            if(response.payload.checkNick){
                setisCheckedNick(true)
            } else {
                setisCheckedNick(false)
            }
        })
    }
    const onCheckPhone = (e) => {
        
        e.preventDefault();
        let body = {
            userPhone : Phone,
        }

        dispatch(checkPhone(body))
        .then(response => {
            setNoticePhone(response.payload.message);
            if(response.payload.checkPhone){
                setisCheckedPhone(true)
            } else {
                setisCheckedPhone(false)
            }
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            userId : UserId,
            password : Password,
            userNickName : NickName,
            userName : Name,
            userPhone : Phone,
        }
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                props.history.push("/");
            }else{
                alert("Failed to sign up");
            }
        })
    }

    const paperStyle ={
        padding : 20,
        height : '650px',
        width : 280,
        margin : '20px auto',
        // textAlign : 'center',
        position: 'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)'
    }
    const hrstyle ={
        backgroundColor : 'gray',
        height : '1px'
    }
    const divstyle1 ={
        paddingLeft: '12.5px',
        marginTop: '20px',
    }
    const divstyle2 ={
        marginTop: '10px',
        fontSize: '12px',
    }
    const textStyle1 ={
        width : 175,
        marginBottom : '10px',
    }
    const textStyle2 ={
        width : 250,
        marginBottom : '10px',
    }
    const btnstyle ={
        margin : '18px 0',
        fontWeight : 'bolder',
        color : '#fff',
        backgroundColor : '#845460'
    }
    const btnstyle2 ={
        margin : '8px 0',
        fontWeight : 'bolder',
        color : '#fff',
        backgroundColor : '#f6bd63',
        width : '80px',
        height : '40px',
        borderRadius : '15px 15px',
        border : 'none',
        cursor : 'pointer',
    }
    const disablestyle ={
        margin : '18px 0',
        fontWeight : 'bolder',
        color : '#fff',
        backgroundColor : 'rgb(189, 189, 189)',
    }
    const pstyle ={
        margin : '0 0',
        fontWeight : 'bolder',
        fontSize : '10px',
    }
    const linkstyle ={
        color : 'inherit',
    }
    const spanstyle ={
        fontSize : '25px',
        fontWeight : 'bolder',
        marginLeft : '70px',
    }

    useEffect(()=>{
        // if(Password !== ConfirmPassword){
        //     setcheckPassword(false);
        // }else{
        //     setcheckPassword(true);
        // }
        if(Password.length === 0 && ConfirmPassword.length === 0){
            setcheckPassword(true);
            setisCheckedPassword(false);
        }else if(Password.length < 5 && ConfirmPassword.length < 5){
            setcheckPassword(false);
            setisCheckedPassword(false);
        }else if(Password !== ConfirmPassword){
            setcheckPassword(false);
            setisCheckedPassword(false);
        }else{
            setcheckPassword(true);
            setisCheckedPassword(true);
        }
    },[Password, ConfirmPassword])

    useEffect(()=>{
        if(Phone.length === 11) {
            setPhone(Phone.replace(/-/g,'').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [Phone]);

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align="left">
                    <Typography>
                        <Link to="/" style={linkstyle}>
                            <ArrowBackIosIcon />
                        </Link>
                        <span style={spanstyle}>회원가입</span>
                    </Typography>
                </Grid>
                <hr style={hrstyle}/>
                <form onSubmit={onSubmitHandler}>
                    <div style={divstyle1}>
                        <TextField style={textStyle1} id="standard-basic" label="아이디" type="text" value={UserId} onChange={onUserIdHandler} />
                        <button type="submit" style={btnstyle2} onClick={onCheckIdHandler}>중복확인</button>
                        {NoticeId.length !== 0 ? <p style={pstyle}>{NoticeId}</p> : null}
                        {checkPassword === true ? <TextField style={textStyle2} id="standard-basic" label="비밀번호" type="password" value={Password} onChange={onPasswordHandler} /> : <TextField error id="standard-error-helper-text" label="비밀번호" type="password" value={Password} onChange={onPasswordHandler} helperText="Incorrect entry." />}
                        {checkPassword === true ? <TextField style={textStyle2} id="standard-basic" label="비밀번호확인" type="password" value={ConfirmPassword} onChange={onPasswordHandler2} /> : <TextField error id="standard-error-helper-text" label="비밀번호확인" type="password" value={ConfirmPassword} onChange={onPasswordHandler2} helperText="최소 5자리 이상 조합"/>}
                        <TextField style={textStyle1} id="standard-basic" label="닉네임" type="text" value={NickName} onChange={onNickNameHandler} />
                        <button type="submit" style={btnstyle2} onClick={onCheckNick}>중복확인</button>
                        {NoticeNick.length !== 0 ? <p style={pstyle}>{NoticeNick}</p> : null}
                        <TextField style={textStyle2} id="standard-basic" label="이름" type="text" value={Name} onChange={onNameHandler} />
                        <TextField style={textStyle1} id="standard-basic" label="휴대폰번호" type="text" value={Phone} onChange={onPhoneHandler} />
                        <button type="submit" style={btnstyle2} onClick={onCheckPhone}>중복확인</button>
                        {NoticePhone.length !== 0 ? <p style={pstyle}>{NoticePhone}</p> : null}

                        <div style={divstyle2}>
                            {/* <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                // label="모두 동의합니다"
                            />
                            모두 동의합니다.<br/> */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                        required
                                    />
                                }
                                label="이용약관 동의"
                            />
                            {/* 이용약관 동의<br/> */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                        required
                                    />
                                }
                                label="개인정보 취급방침 동의"
                            />
                            {/* 개인정보 취급방침 동의<br/> */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                        required
                                    />
                                }
                                label="마케팅 정보 수신 동의"
                            />
                            {/* 마케팅 정보 수신 동의<br/> */}
                        </div>
                    </div>
                    {/* {Checking >= 4 ? <Button type="submit" style={btnstyle} variant="contained" fullWidth>Sign up</Button> : <Button disabled style={disablestyle} variant="contained" fullWidth>Sign up</Button>} */}
                    {isCheckedId && isCheckedNick && isCheckedPhone && isCheckedPassword ? <Button type="submit" style={btnstyle} variant="contained" fullWidth>Sign up</Button> : <Button disabled style={disablestyle} variant="contained" fullWidth>Sign up</Button>}
                    
                </form>
            </Paper>
        </Grid>
    )
}

export default withRouter(LoginPage);
