import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const postForm = (props) => {
    return (
        <form className="postForm" onSubmit={props.handleSubmit}>
            <h3>My Posts</h3>
            <Field name="newPost"
                component="textarea"
                className="input post_text"/>
                <button type="submit" className="btn">Send</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: "post"})(postForm)

const MyPosts = (props) => {

    let postItem =
        props.profilePage.postsData.map(el => <Post key={el.id} message={el.message} likeCount={el.likeCount}/>)

    let sendPost = (value) => {
        console.log(value)
        props.addPost(value.newPost)
    }

    /*let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }*/

    return (
        <div className='MyPost'>
            <div className='post_new'>
                <PostReduxForm onSubmit={sendPost}/>
            </div>
            {postItem}
        </div>
    );
}

export default MyPosts;