import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loading from "../FindUsers/Loading";


const Profile = (props) => {
    if (!props.profile) {
        return <Loading/>
    }

    return (
        <div className='profile-container'>

            <ProfileInfo profile={props.profile}
                         showContacts={props.showContacts}
                         isContacts={props.isContacts}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;