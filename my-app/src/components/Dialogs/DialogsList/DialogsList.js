import React from "react";
import "./DialogsList.css"
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} activeClassName="user_active" className="dialogs_user">
                <img
                className="user_avatar"
                src="https://images.unsplash.com/photo-1562562218-628a3bc92fd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"/>
                <p className="user_name">{props.name}</p>
            </NavLink>
        </div>
    )
}

export default User;