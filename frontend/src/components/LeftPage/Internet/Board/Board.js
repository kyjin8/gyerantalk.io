import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardList from './BoardList';
import BoardCU from './BoardCU';
import BoardDetail from './BoardDetail';

const Board = ({match, UserData}) => {
    // const [selection, setselection] = useState('BoardList');
    // useEffect(() => {
        //     console.log('selection', selection);
        // }, [selection])
    const selection = match.params.select || 'BoardList';
        return (
        <div>
            {selection === 'BoardList' && <BoardList/>}
            {selection === 'create' && <BoardCU UserData={UserData}/>}
            {selection === 'show' && <BoardDetail/>}            
        </div>
    )
}

export default withRouter(Board);
