import React from 'react';
import './ProfileInfo.css';


const ProfileInfo = (props) => {
    return (
        <div className="profile_info">
            <div className='profile_avatar'><img src={props.profile.photos.large}/></div>
            <div className='profile_discription'>
                <h2>{props.profile.fullName}</h2>
                <div className='aboutMe'>{props.profile.aboutMe}</div>
                <div className='contacts'><span className='__bold'>Contacts:</span>
                    <p className='contacts__item'><span className='contacts__item __bold'>Facebook:</span> {props.profile.contacts.facebook}</p>
                    <p className='contacts__item'><span className='contacts__item __bold'>Website:</span> {props.profile.contacts.website}</p>
                    <p className='contacts__item'><span className='contacts__item __bold'>VK:</span> {props.profile.contacts.vk}</p>
                    <p className='contacts__item'><span className='contacts__item __bold'>Twitter:</span> {props.profile.contacts.twitter}</p>
                    <p className='contacts__item'><span className='contacts__item __bold'>Instagram:</span> {props.profile.contacts.instagram}</p>
                    <p className='contacts__item'><span className='contacts__item __bold'>YouTube:</span> {props.profile.contacts.youtube}</p>
                    <p className='contacts__item'><span className='contacts__item __bold'>GitHub:</span> {props.profile.contacts.github}</p>
                    <p className='contacts__item'><span className='contacts__item __bold'>MainLink:</span> {props.profile.contacts.mainLink}</p>
                </div>
                <div>
                    <p><span className='__bold'>Рботаешь:</span> {props.profile.lookingForAJob ? 'ДА' : 'НЕТ'}</p>
                    <p><span className='__bold'>Описание поиска работы:</span> {props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;