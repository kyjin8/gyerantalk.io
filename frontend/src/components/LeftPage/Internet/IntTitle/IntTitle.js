import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const IntTitle = () => {
    return (
        <div className="intTitle">
            <NavLink className="default_active" activeClassName="active" to="/main/Internet/News">
                <div>뉴스</div>
            </NavLink>
            <NavLink className="default_active" activeClassName="active" to="/main/Internet/Shop">
                <div>쇼핑</div>
            </NavLink>
            <div>Egg TV</div>
            <div>Egg Board</div>
        </div>
    )
}

export default withRouter(IntTitle);