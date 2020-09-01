import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, i am ready to start", likeCount: 4},
                {id: 2, message: "Hello World!", likeCount: 16},
            ],
            newPostText: "Hi Samurai"
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: "User1"},
                {id: 2, name: "User2"},
                {id: 3, name: "User3"},
                {id: 4, name: "User4"},
                {id: 5, name: "User5"},
            ],
            messagesData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Yo!"},
                {id: 2, message: "What you do?"},
                {id: 1, message: "I'm SPIDER-MAN!"},
                {id: 2, message: "You crazy!"},
                {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
            ],
            newMessageText: "BUSHIDO"
        },
        navbarPage: {
            friends: [
                {id: 1, userName: "User1"},
                {id: 2, userName: "User2"},
                {id: 3, userName: "User3"},
            ],
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscride(obs) {
        this._callSubscriber = obs;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }
};




export default store;