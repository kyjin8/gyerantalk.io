import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import { loginUser } from '../../../_actions/user_action';
// import { withRouter } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';

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

    const paperStyle = {
        padding : 20,
        height : '70vh',
        width : 280,
        margin : '20px auto',
        textAlign : 'center',
        background : '#f6bd63',
    }
    const avatarStyle = {
        width : '230px',
        height : '90px',
        // marginBottom: '30px',
        margin: '10px 0 30px',
        background : '#f6bd63',
        // border : '1px solid black',
    }
    const btnstyle = {
        margin : '8px 0',
        fontWeight : 'bolder',
        color : '#fff',
        backgroundColor : '#845460'
    }
    const imgstyle ={
        width : '100%',
        height : '100%',
    }
    const logostyle ={
        width: '200px',
        marginTop: '50px',
    }
    const inputstyle ={
        width : '90%',
        margin : '0 auto',
        height : '30px',
        marginBottom : '20px',
        background : '#855460',
        color : '#fff',
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <img src="/text_transparent.png" style={logostyle}></img>
                    <Avatar style={avatarStyle} ><img src="/gyeran_height_cut.png" style={imgstyle} /></Avatar>

                </Grid>
                <form onSubmit={onSubmitHandler}>
                    <input style={inputstyle} type="text" label="UserId" placeholder="Enter UserId" value={UserId} onChange={onUserIdHandler} required/>
                    <input style={inputstyle} type="password" label="Password" placeholder="Enter Password" value={Password} onChange={onPasswordHandler} required/>
                    {/* <FormControlLabel 
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember Me"
                    /> */}
                    <Button type="submit" style={btnstyle} variant="contained" fullWidth>Sign in</Button>
                </form>
                <Typography>
                    <Link href="#">
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginPage;
