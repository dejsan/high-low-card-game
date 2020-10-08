import * as constants from "../constants";

const initialState = constants.INIT_GAME_STATE;

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION.DRAW_CARD:
      const { deck: currentDeck, drawnCards: currentDrawnCards } = state;

      const randomCard = currentDeck
        ? currentDeck[Math.floor(Math.random() * currentDeck.length)]
        : null;

      const newDrawnCards = state.currentCard
        ? [...currentDrawnCards, state.currentCard]
        : state.drawnCards;

      const newDeck = randomCard
        ? currentDeck.filter((i) => i !== randomCard)
        : state.deck;

      return {
        ...state,
        deck: newDeck,
        currentCard: randomCard,
        drawnCards: newDrawnCards,
      };

    case constants.ACTION.NEXT_ROUND:
      return {
        ...state,
        bet: state.bet * constants.BET_MULTIPLIER,
      };

    case constants.ACTION.PLACE_BET_MONEY:
      return {
        ...state,
        bet: action.data.bet,
      };

    case constants.ACTION.PLACE_BET:
      return {
        ...state,
        betType: action.data.betType,
        balance: state.balance - state.bet,
      };

    case constants.ACTION.SHOW_MESSAGE:
      return {
        ...state,
        messageType: action.data.messageType,
      };

    case constants.ACTION.HIDE_MESSAGE:
      return {
        ...state,
        messageType: null,
      };

    case constants.ACTION.NEW_GAME:
      return {
        ...initialState,
        balance: state.balance + state.bet,
      };

    case constants.ACTION.RESET_GAME:
      return initialState;

    case constants.ACTION.GAME_OVER:
      return {
        ...state,
        balance: state.balance,
      };

    default:
      return state;
  }
};
