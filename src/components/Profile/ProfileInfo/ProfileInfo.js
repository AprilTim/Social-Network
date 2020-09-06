import React, {useState} from "react";
import "./ProfileInfo.css";
import ProfileStatusHook from "./ProfileStatusHook";
import UserAvatar from "../../Common/UserAvatar/UserAvatar";
import ProfileFormRedux from "./ProfileForm/ProfileForm";


const ProfileInfo = (props) => {

    let [editPhoto, setEditPhoto] = useState(false)
    let [editProfile, setEditProfile] = useState(false)

    let addNewPhoto = (e) => {
        let photo = e.currentTarget.files[0]
        props.setNewPhoto(photo)
    }

    let contactsItem = Object.keys(props.profile.contacts).map(el => <div key={el}
                                                                          className="profileInfo_contacts_item">
        {el}: {props.profile.contacts[el]}</div>)

    let onSubmit = (value) => {
        props.updateProfileThunk(value)
        /*setEditProfile(false)*/  //Реализовать проверку и выход из редактирования профиля
    }

    /*let arr = ["Invalid url format (Contacts->Website)", "Invalid url format (Contacts->MainLink)"]
     let messages = response.data.messages.length > 0 ? response.data.messages : 'Some error';
    let messages = (check) => {
        let obj = {}
        for (let i = 0; i < check.length; i++) {
            let newCheck = check[i].split(">")[1].split(")").slice(0, 1).join()
            // obj = {[newCheck]: 'error'}
            obj[newCheck] = `error ${newCheck}`
        }
        return obj
    }
    console.log(messages(arr))*/


    return (
        <div className="profileInfo">
            {editProfile &&
            <ProfileFormRedux profile={props.profile}
                              initialValues={props.profile}
                              onSubmit={onSubmit}
                              setEditProfile={setEditProfile}
                              contactsItem={contactsItem}/>}
            <div className="profileInfo_wrapper">
                <div className="profileInfo_header">
                    <UserAvatar className="user_avatar __bigAvatar"
                                photo={props.profile.photos.large}/>
                    <button onClick={() => setEditPhoto(!editPhoto)}
                            className="btn _circle">O
                    </button>
                    <div className={`inputFile_block ${editPhoto && "showInputFile"}`}>
                        <input onChange={addNewPhoto} className={`inputFile`} type="file"/>
                    </div>
                    <div className="followed">
                        <div className="followed_title">Followed</div>
                        <div className="followed_count">---</div>
                    </div>
                </div>
                <div className="profileInfo_description">
                    <div className="profileInfo_description_title">
                        <h2>{props.profile.fullName}</h2>
                        <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    <div className="profileInfo_aboutMe">
                        {props.profile.aboutMe ? props.profile.aboutMe : "Здесь могла быть информация обо мне!"}
                    </div>
                    <div className="profileInfo_contacts">
                        {contactsItem}
                    </div>
                    <div className="profileInfo_work">
                        <p className="profileInfo_contacts_item">
                            <span>В поисках работы:</span> {props.profile.lookingForAJob ? "Да" : "Нет"}</p>
                        <p className="profileInfo_contacts_item">
                            <span>Какую работу ищешь:</span> {props.profile.lookingForAJobDescription}</p>
                    </div>
                </div>
                <button onClick={() => setEditProfile(true)} className="btn">Edit Profile</button>
            </div>
        </div>
    );
}

export default ProfileInfo;