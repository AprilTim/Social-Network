import React from "react";
import "./Dialogs.css"
import User from "./DialogsList/DialogsList";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {

    let sendMessage = () => {
        props.sendMessage();
    };
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateTextMessage(text)
    }

    let dialogsItems = props.dialogsPage.dialogsData.map(el => <User key={el.id} name={el.name} id={el.id}/>);
    let messageItems = props.dialogsPage.messagesData.map(m => <MessageItem key={m.id} message={m.message} id={m.id}/>);

    return (
        <div className="dialogs container">
            <div className="dialogs_list">
                {dialogsItems}
            </div>
            <div className="message">
                {messageItems}
                <textarea
                    onChange={onMessageChange}
                    className="message_new"
                    value={props.dialogsPage.newMessageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;