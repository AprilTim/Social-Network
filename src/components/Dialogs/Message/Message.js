import React from "react";
import "./Message.css"

const MessageItem = (props) => {
    return (
        <div className={"message_item_" + props.id}>
            {props.message}
        </div>
    )
}

export default MessageItem;