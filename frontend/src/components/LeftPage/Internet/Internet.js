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
            {data === 'News' ? <News /> : null}
            {data === 'Shop' ? <Shop /> : null}
        </div>
    )
}

export default withRouter(Internet);
 