import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className='header'>
            <div className='header_inner'>
                <div className="headerText">APRIL</div>
                <div className='login'>
                    {props.isAuth ? <div className="isLogin">{props.login}</div>
                        :<NavLink to={'/login'}>LOGIN</NavLink>}
                        <div className="loginMenu">
                            <NavLink className="btn" to={'/login'}>Login</NavLink>
                            <button onClick={props.logout} className="btn">Logout</button>
                        </div>
                </div>
            </div>
        </header>
    );
}

export default Header;