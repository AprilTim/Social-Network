import React from "react";
import userPhoto from "../../../assets/img/user.jpg";

const UserAvatar = (props) => {
    return(
        <div className={props.className}>
            <img
            src={props.photo != null ? props.photo
                :userPhoto}/>
        </div>
    )
}

export default UserAvatar;