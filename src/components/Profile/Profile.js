import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loading from "../Common/Loader/Loading";


const Profile = (props) => {
    if (!props.profile) {
        return <Loading/>
    }

    return (
        <div className='profile-container'>
            <ProfileInfo profile={props.profile}
                         isContacts={props.isContacts}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         setNewPhoto={props.setNewPhotoThunk}
                         updateProfileThunk={props.updateProfileThunk}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;