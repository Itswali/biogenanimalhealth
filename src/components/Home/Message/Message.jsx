// message.js

import React from "react";

const Message = ({ msg, msg1 }) => (
  <div className="message">
    <div className="message-box">
      <div className="message-details">
        <h3 className="message-quote item">{msg}</h3>
        <h3 className="message-quote item">{msg1}</h3>
      </div>
    </div>
  </div>
);

export default Message;
