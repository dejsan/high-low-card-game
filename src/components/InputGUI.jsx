import React from "react";

import "../assets/css/GUI-Input.css";

class InputGUI extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.maxLengthCheck = this.maxLengthCheck.bind(this);
    this.validateValue = this.validateValue.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    const { clickSound, clickAction, text } = this.props;
    if (clickSound) {
      clickSound();
    }
    if (clickAction) {
      switch (text) {
        case "Bet":
          clickAction(parseInt(e.target.value));
          break;
        default:
          clickAction();
          break;
      }
    }
  }
  maxLengthCheck = (object) => {
    const { text } = this.props;

    switch (text) {
      case "Bet":
        const length = object.target.value.length;
        const maxLength = object.target.maxLength;
        
        if (length > maxLength) {
          object.target.value = object.target.value.slice(0, maxLength);
        }
        break;
      default:
        break;
    }
  };
  validateValue = (object) => {
    const { text, clickAction } = this.props;

    switch (text) {
      case "Bet":
        const min = parseInt(object.target.min);
        const max = parseInt(object.target.max);
        let value = parseInt(object.target.value);

        if (value < min) {
          object.target.value = min;
          value = min;
        } else if (value > max) {
          object.target.value = max;
          value = max;
        }
        clickAction(parseInt(value));
        break;
      default:
        break;
    }
  };
  render() {
    const {
      id,
      text,
      name,
      value,
      min = 0,
      max = 10000,
      step = 1,
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
          value={value}
          readOnly={readOnly}
          maxLength={maxLength}
          onChange={this.handleChange}
          onInput={this.maxLengthCheck}
          onBlur={this.validateValue}
        />
      </div>
    );
  }
}

export default InputGUI;
