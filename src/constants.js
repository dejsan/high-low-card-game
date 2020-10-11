export const ACTION = {
  DRAW_CARD: "game/DRAW_CARD",
  NEXT_ROUND: "game/NEXT_ROUND",
  PLACE_BET_MONEY: "game/PLACE_BET_MONEY",
  PLACE_BET: "game/PLACE_BET",
  SHOW_MESSAGE: "game/SHOW_MESSAGE",
  NEW_GAME: "game/NEW_GAME",
  RESET_GAME: "game/RESET_GAME",
  GAME_OVER: "game/GAME_OVER",
  PLAY_SOUND_CLICK: "game/PLAY_SOUND_CLICK",
};

export const INIT_GAME_STATE = {
  enableBet: true,
  balance: 100,
  bet: 10,
  betType: null,
  deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  currentCard: null,
  drawnCards: [],
  messageType: null,
  disableResetGame: false,
  disableBetLoHi: false,
  disablePlaceBetMoney: false,
  disableNewGame: true,
};

export const BET_TYPE = {
  hi: "hi",
  lo: "lo",
};

export const BET_MULTIPLIER = 2;

export const MESSAGE_DELAY = 500;
export const MESSAGE_TYPE = {
  betWin: "betWin",
  betLose: "betLose",
  gameWin: "gameWin",
  resetGame: "resetGame",
};

export const CANVAS_SIZE = {
  width: 626,
  height: 362,
};

export const SPRITESHEET_URL = "assets/spritesheets/cards.json";

export const CARD_BACK = [
  "BackBlue_1.png",
  "BackBlue_2.png",
  "BackGrey_1.png",
  "BackGrey_2.png",
  "BackRed_1.png",
  "BackRed_2.png",
];

export const CARD_FRONT = ["Clubs_", "Diamond_", "Hearts_", "Spades_"];
