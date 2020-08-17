import React from 'react';
import './Post.css';

const Post = (props) => {

    return (
        <div className='post'>
            <div className='post_avatar'>
                <img src='https://freedesignfile.com/upload/2018/07/Dark-flowers-Stock-Photo.jpg'/>
            </div>
            <p>{props.message} <span>LIKE-{props.likeCount}</span></p>
        </div>
    );
}

export default Post;