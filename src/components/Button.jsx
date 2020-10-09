import React from "react";

import "../assets/css/Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const { clickSound, clickAction, disabled } = this.props;
    const buttonNotDisabled = !disabled;

    if (buttonNotDisabled && clickSound) {
      clickSound();
    }
    if (buttonNotDisabled && clickAction) {
      clickAction();
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

export default Button;
