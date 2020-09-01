import {ProfileAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
/*const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';*/
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_FOLLOWING = 'SET-FOLLOWING'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    profile: null,
    status: '',
    isContacts: false,
    postsData: [
        {id: 1, message: "Hi, i am ready to start", likeCount: 4},
        {id: 2, message: "Hello World!", likeCount: 16},
    ],
    newPostText: "Hi Samurai"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.message,
                likeCount: 0,
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData],

            };
        }
        /*case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }*/
        case SET_USER_PROFILE:
            return {
                ...state, profile: {...action.profile}
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export let addPostActionCreator = (message) => ({type: ADD_POST, message})
let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
/*export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})*/
export let setStatus = (status) => ({type: SET_STATUS, status: status})
export let setFollowing = (followNum) => ({type:SET_FOLLOWING, following:followNum})

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;