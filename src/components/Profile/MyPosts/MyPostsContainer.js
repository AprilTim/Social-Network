import React from 'react';
import './MyPosts.css';
import {addPostActionCreator, /*updateNewPostTextActionCreator*/} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let sendPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }

    return(<MyPosts addPost={sendPost}
                    updateNewPostText={onPostChange}
                    profilePage={state.profilePage}/>);
}*/

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        },
       /* updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))}*/
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;