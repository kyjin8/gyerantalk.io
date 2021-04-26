import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const PlusFriend = ({onToggle3}) => {

    return (
        <div className="plus_site">
            <AddCircleOutlineIcon className="plus_icon" onClick={onToggle3}/>
            <div>친구추가</div>
        </div>
    )
}

export default PlusFriend;
