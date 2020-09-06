import {ProfileAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST'
/*const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';*/
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_FOLLOWING = 'SET-FOLLOWING'
const SET_STATUS = 'SET-STATUS'
const LIKES_CHANGE = 'LIKES-CHANGE'
const SET_NEW_PHOTO = 'SET-NEW-PHOTO'
const UPDATE_PROFILE = 'UPDATE_PROFILE'

let initialState = {
    profile: null,
    status: '',
    isContacts: false,
    postsData: [
        {id: 1, message: "Hi, i am ready to start", likeCount: 4},
        {id: 2, message: "Hi, i am dsadasd to start", likeCount: 4},
        {id: 3, message: "Hello World!", likeCount: 16},
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
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter((n) => `${n.id}${n.message}` != action.id)
            }
        }
        /*case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }*/
        case SET_USER_PROFILE:
            return {
                ...state, profile: {...state.profile,...action.profile}
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case LIKES_CHANGE:
            return {
                ...state,
                postsData: state.postsData.map((el) => el.id == action.id ? {...el, likeCount: el.likeCount + 1} : el)
            }
        case SET_NEW_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: {...state.profile.photos, large: action.newPhoto}}
            }
        /*case UPDATE_PROFILE:
debugger
            console.log()
            return {
                ...state,
                profile: action.newProfile

            }*/
        default:
            return state;
    }
}

export let addPostActionCreator = (message) => ({type: ADD_POST, message})
export let deletePostAC = (id) => ({type: DELETE_POST, id})
let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
/*export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})*/
export let setStatus = (status) => ({type: SET_STATUS, status: status})
export let setFollowing = (followNum) => ({type: SET_FOLLOWING, following: followNum})
export let likesChange = (id) => ({type: LIKES_CHANGE, id})
export let setNewPhoto = (newPhoto) => ({type: SET_NEW_PHOTO, newPhoto})
/*export let updateProfile = (newProfile) => ({type: UPDATE_PROFILE, newProfile})*/

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

export const setNewPhotoThunk = (newPhoto) => async (dispatch) => {
    const response = await ProfileAPI.setNewPhoto(newPhoto)
    if (response.data.resultCode === 0) {
        dispatch(setNewPhoto(response.data.photos))
    }

}

export const updateProfileThunk = (newProfile) => async (dispatch) => {

    const response = await ProfileAPI.updateProfile(newProfile)
    if (response.data.resultCode === 0) {
        dispatch(setUserProfile(newProfile))
    }else {
        let messages = response.data.messages.length > 0 ? response.data.messages : 'Some error';
        dispatch(stopSubmit("profile",{_error:messages}))
    }
}

export default profileReducer;