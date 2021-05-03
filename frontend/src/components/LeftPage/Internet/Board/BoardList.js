import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { getPosts } from '../../../../api/actions/post_action'
// import { createPost } from './BoardCU'
import {Button} from '@material-ui/core'

const BoardList = ({match, UserData}) => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState('');
    // useEffect(()=>{
        console.log('params', match.params);
    // }, [match.params])

    useEffect(()=>{
        dispatch(getPosts())
        .then(res => {
            console.log('aaaa', res.payload.posts)
            setPosts(res.payload.posts);
            console.log(res.payload.posts);
        })
    }, [match.params]);
    
    console.log('posts', posts);

    return (
        <div>
            <Link to="/main/Internet/posts/create"><Button>글쓰기</Button></Link>
            {posts.length !== 0 ? 
                posts.map(post => (
                    <Link className="post_box" to={`/main/Internet/posts/${post._id}`}>
                        <div className="title">{post.title}</div>
                        {/* <div className="body">{post.body}</div> */}
                        <hr/>
                    </Link>
                ))
                :
                <div>게시글이 없습니다.</div>}
        </div>
    )
}

export default withRouter(BoardList)
