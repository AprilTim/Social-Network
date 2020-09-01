import React from "react";
import {sendMessageActionCreator, /*updateTextMessageActionCreato*/r} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";


/*
const DialogsContainer = (props) => {
    let state = props.store.getState();
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    let onMessageChange = (text) => {
        let action = updateTextMessageActionCreator(text)
        props.store.dispatch(action)
    }

    return <Dialogs sendMessage={sendMessage}
                    updateTextMessage={onMessageChange}
                    dialogPage={state.dialogPage}/>
}*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch((sendMessageActionCreator(newMessage)));
        },
        /*updateTextMessage: (text) => {
            dispatch(updateTextMessageActionCreator(text))}*/
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;