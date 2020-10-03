import React from "react";

import Canvas from "./Canvas";
import GUI from "./GUI";

import "../assets/css/Game.css";

class Game extends React.Component {
  render() {
    return (
      <div id="game">
        <Canvas />
        <GUI />
      </div>
    );
  }
}

export default Game;
