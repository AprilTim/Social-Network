import React from 'react';
import './Post.css';
import UserAvatar from "../../../Common/UserAvatar/UserAvatar";
import ExitSvg from "../../../Common/Exit";


const Post = (props) => {

    let deletePost = () => {
        props.deletePost(props.postId)
    }

    let likesChange = () => {
        props.likesChange(props.id)
    }

    return (
        <div className='post'>
            <button onClick={deletePost} className="btn _small"><ExitSvg/></button>
            <UserAvatar className="user_avatar __middleAvatar"/>
            <div>{props.message}</div>
            <div onClick={likesChange} className="like">&#129293;{props.likeCount}</div>
        </div>
    );
}

export default Post;