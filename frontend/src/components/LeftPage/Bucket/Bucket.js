import React from 'react';
import '../../MainPage/Main.scss';

const Bucket = ({UserData}) => {
    return (
        <div className="option_type">
            <div className="type_profile">
                <img src={UserData.image} />
                <div className="type_text">{UserData.userName}({UserData.userId})님의<br />장바구니</div>
            </div>
        </div>
    )
}

export default Bucket;
