import React from "react";

import "../assets/css/Message.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const { playSound, clickAction } = this.props;
    if (playSound) {
      playSound();
    }
    if (clickAction) {
      clickAction();
    }
  }
  render() {
    const { text } = this.props;
    return (
      <div className="message" onClick={this.handleClick}>
        <div className="message-content">
          <p>{text}</p>
          <span>Click to continue...</span>
        </div>
      </div>
    );
  }
}

export default Message;
