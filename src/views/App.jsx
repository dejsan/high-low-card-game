import React from "react";

import Game from "../containers/Game";

import "../assets/css/App.css";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Game />
      </div>
    );
  }
}

export default App;
