import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { playSoundClick } from "../actions/game";

import ButtonGUI from "../components/ButtonGUI";
import InputGUI from "../components/InputGUI";

import "../assets/css/GUI.css";

class GUI extends React.Component {
  render() {
    const { playSoundClick, balance, bid } = this.props;

    return (
      <div id="gui">
        <div className="gui-group">
          <ButtonGUI text="Reset" id="reset" playSound={playSoundClick} />
          <InputGUI
            id="balance"
            text="Balance"
            name="balance"
            defaultValue={balance}
            readOnly
          />
        </div>
        <div className="gui-group">
          <ButtonGUI text="Low" playSound={playSoundClick} />
          <InputGUI
            text="Bet"
            id="bet-input"
            name="bet"
            defaultValue={bid}
            min="10"
            max="100"
            step="10"
            maxLength="3"
            playSound={playSoundClick}
          />
          <ButtonGUI text="High" playSound={playSoundClick} />
        </div>
        <div className="gui-group">
          <ButtonGUI text="New" playSound={playSoundClick} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  exampleData: game.exampleData,
  isSomething: game.isSomething,
  balance: game.balance,
  bid: game.bid,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      playSoundClick,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GUI);
