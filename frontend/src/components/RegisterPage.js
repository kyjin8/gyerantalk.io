import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { registerUser, checkId } from '../api/actions/user_action';
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
        setPhone(e.target.value);
    }
    const onCheckIdHandler = (e) => {

        e.preventDefault();
        let body = {
            userId : UserId,
        }

        dispatch(checkId(body))
        .then(response => {
            if(response.payload.checkId){
                setNoticeId('사용가능');
            }else{
                setNoticeId('사용불가능');
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
        height : '800px',
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
    const textStyle1 ={
        width : 150,
        marginBottom : '10px',
    }
    const textStyle2 ={
        marginBottom : '10px',
    }
    const btnstyle ={
        margin : '8px 0',
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
    const pstyle ={
        margin : '0 0',
        fontWeight : 'bolder',
        fontSize : '10px',
    }

    useEffect(()=>{
        if(Password !== ConfirmPassword){
            setcheckPassword(false);
        }else{
            setcheckPassword(true);
        }
    },[Password, ConfirmPassword])

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align="left">
                    <Typography>
                        <Link to="/">
                            <ArrowBackIosIcon />
                        </Link>
                        회원가입
                    </Typography>
                </Grid>
                <hr style={hrstyle}/>
                <form onSubmit={onSubmitHandler}>
                    <TextField style={textStyle1} id="standard-basic" label="아이디" type="text" value={UserId} onChange={onUserIdHandler} />
                    <button type="submit" style={btnstyle2} onClick={onCheckIdHandler}>중복확인</button>
                    {NoticeId.length !== 0 ? <p style={pstyle}>{NoticeId}</p> : null }
                    {checkPassword === true ? <TextField style={textStyle2} id="standard-basic" label="비밀번호" type="password" value={Password} onChange={onPasswordHandler} /> : <TextField error id="standard-error-helper-text" label="비밀번호" type="password" value={Password} onChange={onPasswordHandler} helperText="Incorrect entry." />}    
                    {checkPassword === true ? <TextField style={textStyle2} id="standard-basic" label="비밀번호확인" type="password" value={ConfirmPassword} onChange={onPasswordHandler2} /> : <TextField error id="standard-error-helper-text" label="비밀번호확인" type="password" value={ConfirmPassword} onChange={onPasswordHandler2} />} 
                    <TextField style={textStyle1} id="standard-basic" label="닉네임" type="text" value={NickName} onChange={onNickNameHandler} />
                    <button type="submit" style={btnstyle2}>중복확인</button>
                    <TextField style={textStyle2} id="standard-basic" label="이름" type="text" value={Name} onChange={onNameHandler} />
                    <TextField style={textStyle1} id="standard-basic" label="휴대폰번호" type="number" value={Phone} onChange={onPhoneHandler} />
                    <button type="submit" style={btnstyle2}>중복확인</button>
                    <FormControlLabel 
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="모두 동의합니다"
                    />
                    <FormControlLabel 
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="이용약관 동의"
                    />
                    <FormControlLabel 
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="개인정보 취급방침 동의"
                    />
                    <FormControlLabel 
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="마케팅 정보 수신 동의"
                    />
                    <Button type="submit" style={btnstyle} variant="contained" fullWidth>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default withRouter(LoginPage);
