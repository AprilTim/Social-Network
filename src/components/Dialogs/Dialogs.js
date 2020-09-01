import React from "react";
import "./Dialogs.css"
import User from "./DialogsList/DialogsList";
import MessageItem from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const messageForm = (props) => {
    return (
        <form className="messageForm" onSubmit={props.handleSubmit}>
            <Field name='newMessage'
                   component="textarea"
                   className="input message_new"/>
                <button className='btn'>Send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: "message"})(messageForm)

const Dialogs = (props) => {

    let sendMessage = (value) => {
        props.sendMessage(value.newMessage);
    };
    /*let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateTextMessage(text)
    }
*/
    let dialogsItems = props.dialogsPage.dialogsData.map(el => <User key={el.id} name={el.name} id={el.id}/>);
    let messageItems = props.dialogsPage.messagesData.map(m => <MessageItem key={m.id} message={m.message} id={m.id}/>);

    return (
        <div className="dialogs container">
            <div className="dialogs_list">
                {dialogsItems}
            </div>
            <div className="message">
                <div className="messageBlock">{messageItems}</div>
                <MessageReduxForm onSubmit={sendMessage}/>
                {/*<div className="message__newMessage"><textarea
                    onChange={onMessageChange}
                    className="input message_new"
                    value={props.dialogsPage.newMessageText}></textarea>
                    <button className='btn' onClick={sendMessage}>Send</button>
                </div>*/}
            </div>
        </div>
    )
}

export default Dialogs;