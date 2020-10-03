import React from "react";

import "../assets/css/Canvas.css";

class ButtonGUI extends React.Component {
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
    const { id, text, disabled } = this.props;
    let className = "button";
    if (disabled) {
      className += " disabled";
    }
    return (
      <div className={className} id={id} onClick={this.handleClick}>
        <span>{text}</span>
      </div>
    );
  }
}

export default ButtonGUI;
