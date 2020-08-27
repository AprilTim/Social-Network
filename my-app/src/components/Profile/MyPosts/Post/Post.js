import React from 'react';
import './Post.css';
import UserAvatar from "./UserAvatar";

const Post = (props) => {

    return (
        <div className='post'>
            <UserAvatar/>
            <p>{props.message} <span>LIKE-{props.likeCount}</span></p>
        </div>
    );
}

export default Post;