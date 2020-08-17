import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postItem =
        props.profilePage.postsData.map(el => <Post key={el.id} message={el.message} likeCount={el.likeCount}/>)

    let sendPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className='MyPost'>
            <div className='post_new'>
                <h3>My Posts</h3>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}

                        className="post_text"></textarea>
                </div>
                <div>
                    <button onClick={sendPost}>Send</button>
                    <button>Close</button>
                </div>
            </div>
            {postItem}
        </div>
    );
}

export default MyPosts;