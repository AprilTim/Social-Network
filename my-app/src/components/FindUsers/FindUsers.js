import React from "react";
import './FindUsers.css'
import userPhoto from "../../assets/img/user.jpg";
import {NavLink} from "react-router-dom";

const FindUsers = (props) => {
    let pagesCount = Math.ceil(props.findUsersPage.totalCountUser / props.findUsersPage.countPage)
    let pages = []
    for (let i =1; i<= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className="container">
            {
                props.findUsersPage.users.map((el) =>  <NavLink to={'/profile/' + el.id}><div className="find_user">
                   <div className="find_user__item">
                        <div className="user_avatar">
                            <img src={el.photos.small != null ? el.photos.small : userPhoto}/>
                        </div>
                        <p>
                            {el.followed ?
                                <button className='btn' onClick={() => {
                                    props.unfollow(el.id)
                                }}>FOLLOW</button>
                                : <button className='btn' onClick={() => {
                                   props.follow(el.id)
                                }} >UNFOLLOW</button>}
                        </p>
                    </div>
                    <div className='userDicription'>
                        <div className='userDicription__inner'>
                            {el.name}
                            <div className='userDicription__adress'>
                                {/*{el.adress.country}
                                <p>{el.adress.city}</p>*/}
                            </div>
                        </div>
                        <div>{/*{el.status}*/}</div>
                    </div>
                </div></NavLink>)
            }
            <div>
                {pages.map(el => <span onClick={() => {props.onChangeCurrentPage(el)}} className={props.findUsersPage.currentPage === el && "selectedPage"}>{el} </span>)}
            </div>
        </div>
    )
}

export default FindUsers;