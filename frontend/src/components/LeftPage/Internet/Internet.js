import React from 'react';
import IntTitle from './IntTitle/IntTitle';
import { withRouter } from 'react-router-dom';
import News from './News/News';
import Shop from './Shop/Shop';
import Board from './Board/Board'

const Internet = ({match, UserData}) => {
    const data = match.params.search || 'News';
    return (
        <div>
            <IntTitle />
            {data === 'News' ? <News UserData={UserData}/> : null}
            {data === 'Shop' ? <Shop UserData={UserData}/> : null}
            {data === 'posts' && <Board UserData={UserData}/>}
        </div>
    )
}

export default withRouter(Internet);
 