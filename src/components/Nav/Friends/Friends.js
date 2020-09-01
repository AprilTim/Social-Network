import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";
import UserAvatar from "../../Profile/MyPosts/Post/UserAvatar";

const Friends = (props) => {
    return (
        <div>
            <NavLink to={"/profile/" + props.id}>
                <UserAvatar/>
            </NavLink>
        </div>
    );
}

export default Friends;