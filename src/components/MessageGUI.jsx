import React from "react";

import "../assets/css/Canvas.css";

class MessageGUI extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const { playSound } = this.props;
    if (playSound) {
        playSound();
    }
  }
  render() {
    const { text } = this.props;
    return (
      <div className="message" onClick={this.handleClick}>
        <p>{text}</p>
        <span>Click to continue...</span>
      </div>
    );
  }
}

export default MessageGUI;
