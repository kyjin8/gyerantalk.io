import React from 'react';
import { withRouter } from 'react-router-dom';

const ShowFriend = ({UserData, ListFriend}) => {

    if(ListFriend.Myfriend !== undefined){
        return (
            <div>
                {
                    ListFriend.Myfriend.map((friend)=>(
                        <div className="myProfile" key={friend._id}>
                            <img src={friend.friendImage} />
                            <div className="text_site">
                                <div className="top">{friend.friendId}</div>
                                <div className="bottom">{friend.friendMessage}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }else{
        return (
            <div>
                <div>친구가 없습니다</div>
            </div>
        )
    }
}

export default withRouter(ShowFriend);
