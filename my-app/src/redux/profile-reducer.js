const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SHOW_CONTACTS = 'SHOW-CONTACTS'

let initialState = {
    profile: null,
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
                message: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost],

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state, profile: {...action.profile}
            }
        case SHOW_CONTACTS:
            console.log(state.isContacts)
            if (state.isContacts){
                return {
                    ...state, isContacts: false
                }
            }
            return {
                ...state, isContacts: true
            }
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let showContacts = () => ({type: SHOW_CONTACTS})
export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;