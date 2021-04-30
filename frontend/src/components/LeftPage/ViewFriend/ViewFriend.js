import axios from 'axios';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ViewFriend = ({match}) => {

    const data = match.params.search || null;

    // useEffect(() => {
    //     axios.post('')
    // }, [])

    console.log('1111111111111',data);

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [])

    return (
        <div>
            {data}
        </div>
    )
}

export default withRouter(ViewFriend);
