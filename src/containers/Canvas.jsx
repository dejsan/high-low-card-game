import React from "react";
import * as PIXI from "pixi.js";
import * as constants from "../constants";

import { connect } from "react-redux";

import "../assets/css/Canvas.css";

import tableBackgroundImg from "../assets/images/table_background.jpg";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcesLoaded: false,
    };
    this.pixiRef = React.createRef();
    this.pixiElement = null;
    this.app = new PIXI.Application({
      width: constants.CANVAS_SIZE.width,
      height: constants.CANVAS_SIZE.height,
      transparent: true,
    });

    this.sprites = {};
    this.cardBack = constants.CARD_BACK;
    this.cardFront = constants.CARD_FRONT;
    this.currentCardBack = "";
    this.currentCardFront = "";
  }
  componentDidMount() {
    this.pixiElement = this.pixiRef.current;
    this.pixiElement.appendChild(this.app.view);
    this.setup();
  }
  componentDidUpdate(prevProps) {
    const { deck, currentCard, drawnCards } = this.props;
    const { resourcesLoaded } = this.state;

    const currentCardDrawn = this.sprites.currentCard;
    const deckDrawn = this.sprites.deck;
    const isLastRound = deck.length === 0 && deck !== prevProps.deck;
    const drawDrawnCards =
      drawnCards.length > 0 && drawnCards !== prevProps.drawnCards;
    const shouldRemoveDrawnCards =
      drawnCards.length === 0 &&
      prevProps.drawnCards.length > 0 &&
      drawnCards !== prevProps.drawnCards;

    if (resourcesLoaded) {
      if (
        currentCardDrawn &&
        currentCard &&
        currentCard !== prevProps.currentCard
      ) {
        this.updateCurrentCard();
        if (!deckDrawn) {
          this.pickCardsColor();
          this.drawDeck();
        }
      }

      if (deckDrawn && isLastRound) {
        this.removeFromCanvas(this.sprites.deck, "deck");
      }

      if (shouldRemoveDrawnCards) {
        this.removeFromCanvas(
          this.sprites.drawnCardsContainer,
          "drawnCardsContainer"
        );
      }

      if (drawDrawnCards) {
        this.drawDrawnCards();
      }
    }
  }
  setup = () => {
    this.pickCardsColor();
    this.app.loader
      .add("images/tableBackground", tableBackgroundImg)
      .add(constants.SPRITESHEET_URL)
      .load(this.initialize);
  };
  initialize = () => {
    this.setState({
      resourcesLoaded: true,
    });
    this.drawTableBackground();
    this.drawCurrentCard();
    this.drawDeck();
    this.drawDrawnCards();
  };

  pickCardsColor = () => {
    const { currentCard } = this.props;

    const isCurrentCardDrawn = this.sprites.currentCard;
    const isDeckDrawn = this.sprites.deck;

    this.currentCardBack = this.cardBack[
      Math.floor(Math.random() * this.cardBack.length)
    ];
    this.currentCardFront = this.cardFront[
      Math.floor(Math.random() * this.cardFront.length)
    ];

    if (isCurrentCardDrawn) {
      const cardName = this.currentCardFront + currentCard + ".png";
      this.sprites.currentCard.texture = PIXI.Texture.from(cardName);
    }
    if (isDeckDrawn) {
      this.sprites.deck.texture = PIXI.Texture.from(this.currentCardFront);
    }
  };

  drawTableBackground = () => {
    this.sprites.tableBackground = new PIXI.Sprite(
      this.app.loader.resources["images/tableBackground"].texture
    );
    this.app.stage.addChild(this.sprites.tableBackground);
  };
  drawCurrentCard = () => {
    const { currentCard } = this.props;
    const cardName = this.currentCardFront + currentCard + ".png";

    this.sprites.currentCard = new PIXI.Sprite(
      this.app.loader.resources[constants.SPRITESHEET_URL].spritesheet.textures[
        cardName
      ]
    );
    this.sprites.currentCard.anchor.set(0.5);
    this.sprites.currentCard.x = this.app.screen.width * 0.572;
    this.sprites.currentCard.y = this.app.screen.height * 0.62;
    this.app.stage.addChild(this.sprites.currentCard);
  };
  drawDeck = () => {
    this.sprites.deck = new PIXI.Sprite(
      this.app.loader.resources[constants.SPRITESHEET_URL].spritesheet.textures[
        this.currentCardBack
      ]
    );
    this.sprites.deck.anchor.set(0.5);
    this.sprites.deck.x = this.app.screen.width * 0.82;
    this.sprites.deck.y = this.app.screen.height * 0.25;
    this.app.stage.addChild(this.sprites.deck);
  };
  drawDrawnCards = () => {
    const { drawnCards } = this.props;

    const startX = this.app.screen.width * 0.18;
    const startY = this.app.screen.height * 0.25;

    if (!this.sprites.drawnCardsContainer) {
      this.sprites.drawnCardsContainer = new PIXI.Container();
      this.app.stage.addChild(this.sprites.drawnCardsContainer);
    }

    drawnCards.forEach((card, index) => {
      const cardName = this.currentCardFront + card + ".png";
      const drawnCard = new PIXI.Sprite(
        this.app.loader.resources[
          constants.SPRITESHEET_URL
        ].spritesheet.textures[cardName]
      );
      drawnCard.anchor.set(0.5);
      drawnCard.x = startX + 20 * index;
      drawnCard.y = startY;
      this.sprites.drawnCardsContainer.addChild(drawnCard);
    });
  };

  removeFromCanvas = (object, name) => {
    this.app.stage.removeChild(object);
    delete this.sprites[name];
  };

  updateCurrentCard = () => {
    const { currentCard } = this.props;
    const cardName = this.currentCardFront + currentCard + ".png";

    this.sprites.currentCard.texture = PIXI.Texture.from(cardName);
  };

  render() {
    return <div id="canvas-container" ref={this.pixiRef} />;
  }
}

const mapStateToProps = ({ game }) => ({
  deck: game.deck,
  currentCard: game.currentCard,
  drawnCards: game.drawnCards,
});

export default connect(mapStateToProps)(Canvas);
