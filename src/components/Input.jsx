import React from "react";

import "../assets/css/Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.maxLengthCheck = this.maxLengthCheck.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    const { clickSound, clickAction, text, readOnly } = this.props;
    const inputValue = e.target.value;

    if (readOnly) return;

    if (clickSound) {
      clickSound();
    }
    if (clickAction) {
      switch (text) {
        case "Bet":
          clickAction(parseInt(inputValue));
          break;
        default:
          clickAction();
          break;
      }
    }
  }
  maxLengthCheck = (e) => {
    const { text, readOnly } = this.props;

    if (readOnly) return;

    switch (text) {
      case "Bet":
        const length = e.target.value.length;
        const maxLength = e.target.maxLength;

        if (length > maxLength) {
          e.target.value = e.target.value.slice(0, maxLength);
        }
        break;
      default:
        break;
    }
  };
  handleBlur = (e) => {
    const { text, clickAction, readOnly } = this.props;

    if (readOnly) return;

    switch (text) {
      case "Bet":
        const min = parseInt(e.target.min);
        const max = parseInt(e.target.max);
        let value = parseInt(e.target.value);

        if (value < min) {
          e.target.value = min;
          value = min;
        } else if (value > max) {
          e.target.value = max;
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
      value = 1,
      min = 1,
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
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default Input;
