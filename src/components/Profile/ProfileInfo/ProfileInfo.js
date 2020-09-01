import React from 'react';
import './ProfileInfo.css';
import userPhoto from "../../../assets/img/user.jpg";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    return (
        <div className="profile_info">
            <div className="profileInfo-wrapper">
                <div className="profile-info_sidebar">
                    <div className='profile_avatar'><img
                        src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/></div>
                    <div className="following">Following</div>
                    <div className="followers">---</div>
                </div>
                <div className='profile_discription'>
                    <div className="nameStatus"><h2>{props.profile.fullName}</h2>
                        <ProfileStatus status={props.status}
                                       updateStatus={props.updateStatus}/></div>
                    <div
                        className='aboutMe'>{props.profile.aboutMe != null ? props.profile.aboutMe : 'Здесь могла быть информация обо мне!'}</div>
                    <div className='contacts'>
                        <div className='contacts__item'>Facebook: {props.profile.contacts.facebook}</div>
                        <div className='contacts__item'>Website: {props.profile.contacts.website}</div>
                        <div className='contacts__item'>VK: {props.profile.contacts.vk}</div>
                        <div className='contacts__item'>Twitter:{props.profile.contacts.twitter}</div>
                        <div className='contacts__item'>Instagram: {props.profile.contacts.instagram}</div>
                        <div className='contacts__item'>YouTube: {props.profile.contacts.youtube}</div>
                        <div className='contacts__item'>GitHub: {props.profile.contacts.github}</div>
                        <div className='contacts__item'>MainLink: {props.profile.contacts.mainLink}</div>
                    </div>
                    <div className="work">
                        <p><span>Работаешь:</span> {props.profile.lookingForAJob ? 'ДА' : 'НЕТ'}</p>
                        <p><span>Описание поиска работы:</span> {props.profile.lookingForAJobDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;