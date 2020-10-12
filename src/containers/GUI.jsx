import React from "react";
import * as constants from "../constants";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  newGame,
  resetGame,
  placeBetMoney,
  placeBet,
  gameOver,
  nextRound,
  playSoundClick,
  toggleBackgroundMusic,
} from "../actions/game";

import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";

import "../assets/css/GUI.css";

class GUI extends React.Component {
  constructor(props) {
    super(props);
    this.renderMessage = this.renderMessage.bind(this);
  }
  renderMessage() {
    const {
      messageType,
      playSoundClick,
      gameOver,
      nextRound,
      newGame,
      resetGame,
    } = this.props;

    switch (messageType) {
      case constants.MESSAGE_TYPE.betLose:
        return (
          <Message
            text="Bad luck"
            clickSound={playSoundClick}
            clickAction={gameOver}
            color="red"
          />
        );
      case constants.MESSAGE_TYPE.betWin:
        return (
          <Message
            text="Great job"
            clickSound={playSoundClick}
            clickAction={nextRound}
            color="green"
          />
        );
      case constants.MESSAGE_TYPE.gameWin:
        return (
          <Message
            text="Victory! Play again!"
            clickSound={playSoundClick}
            clickAction={newGame}
            color="green"
          />
        );
      case constants.MESSAGE_TYPE.resetGame:
        return (
          <Message
            text="Bad luck + Balance reseted"
            clickSound={playSoundClick}
            clickAction={resetGame}
            color="red"
          />
        );
      default:
        return (
          <Message
            text="Default Message"
            clickSound={playSoundClick}
            clickAction={resetGame}
            color="red"
          />
        );
    }
  }

  render() {
    const {
      balance,
      bet,
      messageType,
      disableResetGame,
      disableBetLoHi,
      disablePlaceBetMoney,
      disableNewGame,
      newGame,
      resetGame,
      placeBetMoney,
      placeBet,
      playSoundClick,
      toggleBackgroundMusic,
    } = this.props;

    const showMessage = messageType;

    return (
      <div id="gui">
        {showMessage && this.renderMessage()}
        <div className="gui-group">
          <Button
            text="Music"
            id="music"
            clickSound={playSoundClick}
            clickAction={toggleBackgroundMusic}
          />
          <Button
            text="Reset"
            id="reset"
            clickSound={playSoundClick}
            clickAction={resetGame}
            disabled={disableResetGame}
          />
          <Input
            id="balance"
            text="Balance"
            name="balance"
            value={balance}
            readOnly
          />
        </div>
        <div className="gui-group">
          <Button
            text="Low"
            clickSound={playSoundClick}
            clickAction={() => placeBet(constants.BET_TYPE.lo)}
            disabled={disableBetLoHi}
          />
          <Input
            text="Bet"
            id="bet-input"
            name="bet"
            value={bet}
            min="10"
            max="100"
            step="5"
            maxLength="3"
            clickSound={playSoundClick}
            clickAction={placeBetMoney}
            readOnly={disablePlaceBetMoney}
          />
          <Button
            text="High"
            clickSound={playSoundClick}
            clickAction={() => placeBet(constants.BET_TYPE.hi)}
            disabled={disableBetLoHi}
          />
        </div>
        <div className="gui-group">
          <Button
            text="New"
            clickSound={playSoundClick}
            clickAction={newGame}
            disabled={disableNewGame}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  balance: game.balance,
  bet: game.bet,
  messageType: game.messageType,
  disableResetGame: game.disableResetGame,
  disableBetLoHi: game.disableBetLoHi,
  disablePlaceBetMoney: game.disablePlaceBetMoney,
  disableNewGame: game.disableNewGame,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      newGame,
      resetGame,
      placeBetMoney,
      placeBet,
      gameOver,
      nextRound,
      playSoundClick,
      toggleBackgroundMusic,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GUI);
