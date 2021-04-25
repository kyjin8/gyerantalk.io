import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import '../../MainPage/Main.scss';

const Category = () => {



    return (
        <div className="left_category">
            <PersonIcon style={{ fontSize: 30 }} />
            <QuestionAnswerRoundedIcon style={{ fontSize: 30 }} />
            <LanguageIcon style={{ fontSize: 30 }} />
            <MoreHorizIcon style={{ fontSize: 30 }} />
        </div>
    )
}

export default Category;
