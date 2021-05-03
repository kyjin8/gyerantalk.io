import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deletePost, viewPost } from "../../../../api/actions/post_action";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const BoardDetail = ({UserData, match, history, selection}) => {
    const dispatch = useDispatch();

    const [post, setPost] = useState('');

    useEffect(() => {
        dispatch(viewPost({UserData, selection}))
        .then(res => {
            console.log('detail', res.payload.post)
            setPost(res.payload.post);
        })
        .then(res => {
            console.log('aaaaaaaposts', post);
        })
    }, [selection]);

    const onClick = (e) => {
        dispatch(deletePost({UserData, selection}))
        .then(res => {
            history.push('/main/Internet/posts');
        })
    }

    const imgStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        objectFit: 'cover',
        borderRadius: '50%',
    }
    const profiletxtStyle = {
        display: 'inline-block',
        marginLeft: '10%',
        height: '50px',
        transform: 'translateY(12.5px)',
    }
    return (
        <div>
        { post ?
        <div style={{display: 'block', margin: '10%'}}>
            <div className="writer_profile" style={{display: 'flex'}}>
                <img src={post.writerData.image} style={imgStyle}/>
                <div style={profiletxtStyle}>{post.writerData.userNickName}</div>
            </div>
            <h2 className="post_title" style={{margin: '15% 0'}}>{post.title}</h2>
            <div className="post_body" style={{margin: '15% 0'}}>{post.body}</div>
            <div style={{display: 'block', textAlign: 'center'}}>
                <Link to={`/main/Internet/posts/${post._id}/update`}>
                    <Button style={{backgroundColor: '#f6bd63', color: '#fff', marginRight: '5%'}}>수정</Button>
                </Link>
                <Button style={{backgroundColor: 'rgba(182, 182, 182, 0.521)'}} onClick={onClick}>삭제</Button>
            </div>
        </div>
        : <></>
        }
        </div>
    )
}

export default BoardDetail
