import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { getPosts } from '../../../../api/actions/post_action'
// import { createPost } from './BoardCU'
import { Button } from "@material-ui/core";
import { LoadingOutlined } from '@ant-design/icons';

const BoardList = ({match, UserData}) => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState('');

    console.log('posts', posts);
    useEffect(()=>{
        dispatch(getPosts())
        .then(res => {
            setPosts(res.payload.posts);
        })
    }, [match.params]);

    const titleStyle = {
        padding: '2%',
        borderBottom: '1px solid rgba(182, 182, 182, 0.521)',
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Link to="/main/Internet/posts/create"><Button style={{backgroundColor: '#f6bd63', color: '#fff', fontWeight: '700'}}>글쓰기</Button></Link>
            </div>
            {posts.length !== 0 ? 
                posts.map(post => (
                    <Link key={post._id} className="post_box" to={`/main/Internet/posts/${post._id}`}>
                        <div className="title" style={titleStyle}>{post.title}</div>
                        {/* <div className="body">{post.body}</div> */}
                    </Link>
                ))
                :
                // <div>게시글이 없습니다.</div>
                <LoadingOutlined className="loading"/>
            }
        </div>
    )
}

export default withRouter(BoardList)
