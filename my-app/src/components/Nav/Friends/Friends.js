import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    return (
        <div>
            <NavLink to={"/profile/" + props.id}><div  className={s.friend}></div></NavLink>
        </div>
    );
}

export default Friends;