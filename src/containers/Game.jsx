import React from "react";

import * as constants from "../constants";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { drawCard, showMessage, resetGame } from "../actions/game";

import Canvas from "./Canvas";
import GUI from "./GUI";

import "../assets/css/Game.css";

class Game extends React.Component {
  componentDidMount() {
    const { betType, currentCard, drawCard } = this.props;

    if (!currentCard && !betType) {
      drawCard();
    }
  }
  componentDidUpdate(prevProps) {
    const {
      balance,
      betType,
      deck,
      currentCard,
      showMessage,
      drawCard,
    } = this.props;

    const shouldDrawCard =
      (betType && betType !== prevProps.betType) || !currentCard;

    const shouldShowMessage = currentCard !== prevProps.currentCard && betType;
    const shouldResetGame = balance <= 0;

    const isLastRound = deck.length === 0;

    const isBetWin =
      (betType === constants.BET_TYPE.hi &&
        currentCard > prevProps.currentCard) ||
      (betType === constants.BET_TYPE.lo &&
        currentCard < prevProps.currentCard);

    if (shouldDrawCard) {
      drawCard();
    }
    if (shouldShowMessage) {
      if (isBetWin) {
        if (isLastRound) {
          showMessage(constants.MESSAGE_TYPE.gameWin);
        } else {
          showMessage(constants.MESSAGE_TYPE.betWin);
        }
      } else {
        showMessage(constants.MESSAGE_TYPE.betLose);
      }
    }
    if (shouldResetGame) {
      showMessage(constants.MESSAGE_TYPE.resetGame);
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
  betType: game.betType,
  deck: game.deck,
  currentCard: game.currentCard,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      drawCard,
      showMessage,
      resetGame,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Game);
