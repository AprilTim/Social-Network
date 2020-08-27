import React from 'react';
import './ProfileInfo.css';
import userPhoto from "../../../assets/img/user.jpg";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    return (
        <div className="profile_info">
            <div className="profile-info_sidebar">
                <div className='profile_avatar'><img
                    src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/></div>
                <div className="following">Following</div>
                <div className="followers">Followers</div>
            </div>
            <div className='profile_discription'>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
                <div className='contacts'>
                    <div
                        className=''>{props.profile.aboutMe != null ? props.profile.aboutMe : 'Здесь могла быть информация обо мне!'}</div>
                    <button onClick={() => {
                        props.showContacts()
                    }} className='btn'>CONTACTS
                    </button>
                    {props.isContacts ?
                        <div>
                            <p className='contacts__item'><span
                                className='contacts__item __bold'>Facebook:</span> {props.profile.contacts.facebook}</p>
                            <p className='contacts__item'><span
                                className='contacts__item __bold'>Website:</span> {props.profile.contacts.website}</p>
                            <p className='contacts__item'><span
                                className='contacts__item __bold'>VK:</span> {props.profile.contacts.vk}</p>
                            <p className='contacts__item'><span
                                className='contacts__item __bold'>Twitter:</span> {props.profile.contacts.twitter}</p>
                            <p className='contacts__item'><span
                                className='contacts__item __bold'>Instagram:</span> {props.profile.contacts.instagram}
                            </p>
                            <p className='contacts__item'><span
                                className='contacts__item __bold'>YouTube:</span> {props.profile.contacts.youtube}</p>
                            <p className='contacts__item'><span
                                className='contacts__item __bold'>GitHub:</span> {props.profile.contacts.github}</p>
                            <p className='contacts__item'><span
                                className='contacts__item __bold'>MainLink:</span> {props.profile.contacts.mainLink}</p>
                        </div>
                        : null}
                </div>
                <div>
                    <p><span className='__bold'>Работаешь:</span> {props.profile.lookingForAJob ? 'ДА' : 'НЕТ'}</p>
                    <p><span className='__bold'>Описание поиска работы:</span> {props.profile.lookingForAJobDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;