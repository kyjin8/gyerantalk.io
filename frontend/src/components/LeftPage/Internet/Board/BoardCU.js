import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createPosts } from '../../../../api/actions/post_action';

const BoardCU = ({UserData, match, history}) => {
    const dispatch = useDispatch();
    const selection = match.params.select;

    const [inputs, setInputs] = useState({
        title: '',
        body: '',
    });
    const {title, body} = inputs

    const onChange = (e) => {
        const {className, value} = e.target
        const nextInputs = {
            ...inputs,
            [className] : value,
        }
        setInputs(nextInputs)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const Writer = UserData.userNickName;
        // console.log('submit', title, body, UserData.userNickName);
        dispatch(createPosts({title, body}))
        .then(res => {
            history.push('/main/Internet/posts');
        })
    }

    return (
        <div>
            {/* <form action="/posts" method="post"> */}
            <form onSubmit={onSubmit}>
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
            {/* BoardCU */}
            {/* {selection === 'create' ? }
            {selection === 'update' ? } */}
        </div>
    )
}

export default withRouter(BoardCU)
