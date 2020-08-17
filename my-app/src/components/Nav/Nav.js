import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

    let us = props.navbarPage.friends.map( item => <Friends key={item.id} id={item.id} userName={item.userName}/>)

    return (
        <nav className={s.nav}>
            <div className={s.menu}>
                <div className={s.item}>
                    <NavLink to="/profile" className={s.link} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={s.link} activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={s.link} activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={`${s.item} ${s.item__mt}`}>
                    <NavLink to="/find_users" className={s.link} activeClassName={s.active}>Find Users</NavLink>
                </div>
                <div className={`${s.item} ${s.item__mt}`}>
                    <NavLink to="/settings" className={s.link} activeClassName={s.active}>Settings</NavLink>
                </div>
                <div className={s.friends}>
                    {us}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;