import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";
import { updatePost, viewPost } from '../../../../api/actions/post_action';

const BoardCU = ({UserData, match, history}) => {
    const dispatch = useDispatch();
    const selection = match.params.select;
    const process = match.params.process;

    const [post, setPost] = useState('');

    const [inputs, setInputs] = useState({
        title: '',
        body: '',
    });
    
    const {title, body} = inputs;

    useEffect(()=>{
        console.log('update selection', selection);
        dispatch(viewPost({UserData, selection, process}))
        .then(res => {
            console.log('detail', res.payload.post)
            setPost(res.payload.post);
            
        })
    }, [selection]);

    useEffect(()=>{
        setInputs({ title: post.title, body: post.body })
    }, [post]);

    const onChange = (e) => {
        const {className, value} = e.target
        const nextInputs = {
            ...inputs,
            [className] : value,
        }
        setInputs(nextInputs)
    }
    const onSubmitUpdate = (e) => {
        e.preventDefault();
        const Writer = UserData.userNickName;
        dispatch(updatePost({title, body, selection}))
        .then(res => {
            history.push('/main/Internet/posts');
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitUpdate}>
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input type="text" id="title" name="title" value={title} className="title"
                    onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="body">내용</label>
                    <textarea id="body" name="body" rows="5" value={body} className="body"
                    onChange={onChange}></textarea>
                </div>
                <div>
                    <a className="btn btn-primary" href="/posts">목록으로</a>
                    <button type="submit" className="btn btn-primary">제출</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(BoardCU)
