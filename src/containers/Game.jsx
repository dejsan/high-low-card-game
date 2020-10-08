import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  drawCard,
  nextRound,
  placeBetMoney,
  placeBet,
  showMessage,
  hideMessage,
  newGame,
  resetGame,
  gameOver,
} from "../actions/game";

import Canvas from "./Canvas";
import GUI from "./GUI";

import "../assets/css/Game.css";

class Game extends React.Component {
  // Game logic
  componentDidUpdate(prevProps) {
    const {
      //   balance,
      //   bet,
      //   betType,
      //   deck,
      //   currentCard,
      //   drawnCards,
      messageType,
      //   disableResetGame,
      //   disableBetLoHi,
      //   disablePlaceBetMoney,
      //   disableNewGame,
      hideMessage,
    } = this.props;

    if (prevProps.messageType && messageType === prevProps.messageType) {
      hideMessage();
    }
  }

  render() {
    return (
      <div id="game">
        <Canvas />
        <GUI />
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  balance: game.balance,
  bet: game.bet,
  betType: game.betType,
  deck: game.deck,
  currentCard: game.currentCard,
  drawnCards: game.drawnCards,
  messageType: game.messageType,
  disableResetGame: game.disableResetGame,
  disableBetLoHi: game.disableBetLoHi,
  disablePlaceBetMoney: game.disablePlaceBetMoney,
  disableNewGame: game.disableNewGame,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      drawCard,
      nextRound,
      placeBetMoney,
      placeBet,
      showMessage,
      hideMessage,
      newGame,
      resetGame,
      gameOver,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Game);
