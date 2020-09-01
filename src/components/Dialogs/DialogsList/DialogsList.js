import React from "react";
import "./DialogsList.css"
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} activeClassName="user_active" className="dialogs_user">
                <div className="dialogs_user__item"><img
                    className="user_avatar __smallAvatar"
                    src="https://images.unsplash.com/photo-1562562218-628a3bc92fd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"/>
                    <span className="dialogs__userName">{props.name}</span></div>
            </NavLink>
        </div>
    )
}

export default User;