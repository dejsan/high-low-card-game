import React from "react";

import "../assets/css/Canvas.css";

class InputGUI extends React.Component {
  constructor(props) {
    super(props);
    this.handleBidChange = this.handleBidChange.bind(this);
  }
  handleBidChange(e) {
    e.preventDefault();
    const { playSound } = this.props;
    if (playSound) {
      playSound();
    }
  }
  render() {
    const {
      id,
      text,
      name,
      defaultValue = 0,
      min = 1,
      max = 100,
      step = 5,
      readOnly,
      maxLength,
    } = this.props;
    return (
      <div id={id}>
        <span>{text}</span>
        <br />
        <input
          type="number"
          name={name}
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          readOnly={readOnly}
          maxLength={maxLength}
          onChange={this.handleBidChange}
        />
      </div>
    );
  }
}

export default InputGUI;
