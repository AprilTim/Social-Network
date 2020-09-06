import React from "react";
import "./DialogsList.css"
import {NavLink} from "react-router-dom";
import UserAvatar from "../../Common/UserAvatar/UserAvatar";

const User = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} activeClassName="user_active" className="dialogs_user">
                <div className="dialogs_user__item">
                    <UserAvatar className="user_avatar __smallAvatar"/>
                    <span className="dialogs__userName">{props.name}</span></div>
            </NavLink>
        </div>
    )
}

export default User;