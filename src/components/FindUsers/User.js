import React from "react";
import './FindUsers.scss'
import {NavLink} from "react-router-dom";
import UserAvatar from "../Common/UserAvatar/UserAvatar";

const User = (props) => {
    return (
        <div className="findUser_container">
            <div className="findUser_item">
                <UserAvatar className='user_avatar __middleAvatar' photo={props.photos.small}/>
                {props.name}
            </div>
            <div className='userDecription'>
                <p>
                    {props.followed ?
                        <button disabled={props.followingInProgress.some(id => id === props.id)} className='btn'
                                onClick={() => {
                                    props.unfollow(props.id)
                                }}>FOLLOW</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.id)} className='btn'
                                  onClick={() => {
                                      props.follow(props.id)
                                  }}>UNFOLLOW</button>}
                </p>
            </div>
            <NavLink to={'/profile/' + props.id}>
                <div className="userDecription_inner">View Profile</div>
            </NavLink>
        </div>
    )
}

export default User;