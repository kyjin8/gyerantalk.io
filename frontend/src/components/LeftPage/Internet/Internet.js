import React from 'react';
import IntTitle from './IntTitle/IntTitle';
import { withRouter } from 'react-router-dom';
import News from './News/News';
import Shop from './Shop/Shop';

const Internet = ({match, Userdata}) => {
    const data = match.params.search || 'News';
    return (
        <div>
            <IntTitle />
            {data === 'News' && <News Userdata={Userdata}/> }
            {data === 'Shop' && <Shop Userdata={Userdata}/> }
        </div>
    )
}

export default withRouter(Internet);
 