import * as constants from "../constants";
import ClickSound from "../assets/sound/click.mp3";
import Music from "../assets/sound/music.mp3";

const music = new Audio(Music);
music.loop = true;
music.volume = 0.5;

export const drawCard = () => {
  return {
    type: constants.ACTION.DRAW_CARD,
  };
};

export const nextRound = () => {
  return {
    type: constants.ACTION.NEXT_ROUND,
  };
};

export const placeBetMoney = (bet) => {
  return {
    type: constants.ACTION.PLACE_BET_MONEY,
    data: { bet },
  };
};

export const placeBet = (betType) => {
  return {
    type: constants.ACTION.PLACE_BET,
    data: { betType },
  };
};

export const showMessage = (messageType) => {
  return {
    type: constants.ACTION.SHOW_MESSAGE,
    data: { messageType },
  };
};

export const newGame = () => {
  return {
    type: constants.ACTION.NEW_GAME,
  };
};

export const resetGame = () => {
  return {
    type: constants.ACTION.RESET_GAME,
  };
};

export const gameOver = () => {
  return {
    type: constants.ACTION.GAME_OVER,
  };
};

export const playSoundClick = () => {
  const sound = new Audio(ClickSound);
  sound.play();
  return {
    type: constants.ACTION.PLAY_SOUND_CLICK,
  };
};

export const toggleBackgroundMusic = () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
  return {
    type: constants.ACTION.TOGGLE_BACKGROUND_MUSIC,
  };
};
