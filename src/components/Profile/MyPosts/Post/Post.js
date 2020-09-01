import React from 'react';
import './Post.css';
import UserAvatar from "./UserAvatar";

const Post = (props) => {

    return (
        <div className='post'>
            <UserAvatar/>
            <div>{props.message}</div>
            <div className="like">&#129293;{props.likeCount}</div>
        </div>
    );
}

export default Post;