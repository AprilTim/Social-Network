import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loading from "../FindUsers/Loading";


const Profile = (props) => {
    if(!props.profile){
        return <Loading/>
    }

    return (
        <div className='container'>
            <div className='profile_img'></div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;