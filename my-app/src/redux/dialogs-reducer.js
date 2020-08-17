const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

let initialState = {
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
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ],
    newMessageText: "BUSHIDO"
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 1,
                message: state.newMessageText,
            };
            return {
                ...state,
                newMessageText: (''),
                messagesData: [...state.messagesData,newMessage]
            };
        }
        case UPDATE_TEXT_MESSAGE: {
            return  {
                ...state,
                newMessageText: action.newM
            }

        }
        default:
            return state;
    }
}

export let sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export let updateTextMessageActionCreator = (text) => {
    return {type: UPDATE_TEXT_MESSAGE, newM: text}
}


export default dialogsReducer;