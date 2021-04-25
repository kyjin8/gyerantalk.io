import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { loginUser } from '../api/actions/user_action';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    customTextField: {
      "& input::placeholder": {
        color : '#fff',
        fontWeight : 'bolder'
      }
    }
})

const LoginPage = (props) => {

    const dispatch = useDispatch();

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

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess){
                props.history.push('/main');
            }else{
                alert('Error');
            }
        })

    }

    const paperStyle = {
        padding : 20,
        height : '568px',
        width : 280,
        margin : '0 auto',
        textAlign : 'center',
        background : '#f6bd63',
        position: 'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
    }
    const avatarStyle = {
        width : '230px',
        height : '90px',
        margin: '10px 0 30px',
        background : '#f6bd63',
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
        color : '#fff'
    }
    const linkstyle ={
        color : '#fff',
        fontWeight : 'bolder',
    }

    const classes = useStyles();

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} classes={{root:classes.customTextField}}>
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
                    <Link to="/register" style={linkstyle}>
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default withRouter(LoginPage);
