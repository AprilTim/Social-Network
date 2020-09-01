import React from "react";
import './FindUsers.css'
import userPhoto from "./../../assets/img/user.jpg";
import {NavLink} from "react-router-dom";

const FindUsers = (props) => {
    let pagesCount = Math.ceil(props.findUsersPage.totalCountUser / props.findUsersPage.countPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className="find_user_container">{
                props.findUsersPage.users.map((el) => <div className="find_user">
                    <div className="find_user__item">
                        <div className="user_avatar">
                            <img src={el.photos.small != null ? el.photos.small : userPhoto}/>
                        </div>
                        {el.name}
                    </div>
                    <div className='userDicription'>
                        <p>
                            {el.followed ?
                                <button disabled={props.followingInProgress.some(id => id === el.id)} className='btn'
                                        onClick={() => {
                                            props.unfollow(el.id)
                                        }}>FOLLOW</button>
                                : <button disabled={props.followingInProgress.some(id => id === el.id)} className='btn'
                                          onClick={() => {
                                              props.follow(el.id)
                                          }}>UNFOLLOW</button>}
                        </p>
                    </div>
                    <NavLink to={'/profile/' + el.id}>
                        <div className="userDicription__inner">View Profile</div>
                    </NavLink>
                </div>)
            }</div>
            <div>
                {pages.map(el => <span onClick={() => {
                    props.onChangeCurrentPage(el)
                }} className={props.findUsersPage.currentPage === el && "selectedPage"}>{el} </span>)}
            </div>
        </div>
    )
}

export default FindUsers;