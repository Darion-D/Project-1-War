// CREATE DECK OF CARDS
const suits = [`♠`, `♥` , `♦`, `♣`];
const values = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`]


// DOM elements
const modalContainer = document.querySelector(`.modal-container`);
const gameboard = document.querySelector(`.gameboard`);
const body = document.querySelector(`body`);
const h1 = document.querySelector(`h1`);
const playerDeckEl = document.querySelector(`.player-deck`);
const playerCardEl = document.querySelector(`.player-card`);
const dealerDeckEl = document.querySelector(`.dealer-deck`);
const dealerCardEl = document.querySelector(`.dealer-card`);
const h3 = document.querySelector(`h3`);
const closeBtn = document.querySelector(`.close`)
const drawBtn = document.querySelector(`.draw`);
const rulesBtn = document.querySelector(`.rules`);
const playBtn= document.querySelector(`.play`);
const playerCardValue1 = document.querySelector(`.p-card-value-top`)
const playerCardValue2 = document.querySelector(`.p-card-value-bottom`)
const playerCardSuit = document.querySelector(`.p-card-suit`)
const dealerCardValue1 = document.querySelector(`.d-card-value-top`)
const dealerCardValue2 = document.querySelector(`.d-card-value-bottom`)
const dealerCardSuit = document.querySelector(`.d-card-suit`)


class Deck {
   constructor(cards = createDeck()) {
      this.cards = cards;
   }

   shuffle() {
      //randomly changes the order of cards in deck array
      this.cards.sort(() => Math.random() - 0.5);
   };

   dealCards(deck){
      //adds 26 cards to each players deck
      this.cards.forEach((card, i) => {
      return  i % 2 === 0 ? playerDeck.push(card) : dealerDeck.push(card);
      });
   };

};

 class Card {
    constructor(suit, value,) {
        this.suit = suit;
        this.value = value;
    }
 };

 // Arrays of card objects
 let deck = new Deck;
 let playerDeck = [];
 let dealerDeck = [];
 let cardsInPlay = [];
 let clickCount = 0;
 let gameOn = false;



// Functions

function init() {
   playBtn.innerHTML = `Reset`;
   playerDeckEl.innerHTML = `26`;
   dealerDeckEl.innerHTML = `26`;
   dealerCardEl.style.color = `white`;
   playerCardEl.style.color = `white`;
   gameboard.classList.remove(`hidden`);
   body.style.backgroundColor = `lightgray`;
   playerDeck = [];
   dealerDeck = [];
   gameOn = true;
   h1.innerHTML = `War! The Card Game`;
   h3.innerHTML = `Click "Draw"`;
   deck.shuffle();
   deck.dealCards();
   console.log(playerDeck, dealerDeck);
   clickCount++;
}

function compareValue() {
    if (values.indexOf(cardsInPlay[0].value) > values.indexOf(cardsInPlay[1].value)) {
      playerDeck.push(...cardsInPlay);
      h3.innerHTML = `Player wins`
      console.log(playerDeck.length, dealerDeck.length);
      
    } else if (values.indexOf(cardsInPlay[0].value) < values.indexOf(cardsInPlay[1].value)) {
       dealerDeck.push(...cardsInPlay);
       h3.innerHTML = `Dealer wins`
       console.log(playerDeck.length, dealerDeck.length);

      
   } else {war()}
   updateDeckCount();
    cardsInPlay = [];
    checkWinner(playerDeck, dealerDeck);
};

 function createDeck() {
   return suits.flatMap(suit => {
      return values.map(value => {
         return new Card(suit, value);
      });
   });
 };
 

function showCards(cardsInPlay) {
   let playerCard = cardsInPlay[cardsInPlay.length - 2];
   let dealerCard = cardsInPlay[cardsInPlay.length - 1];

   playerCardValue1.innerHTML = playerCard.value;
   playerCardValue2.innerHTML = playerCard.value;
   playerCardSuit.innerHTML = playerCard.suit;

   dealerCardValue1.innerHTML = dealerCard.value;
   dealerCardValue2.innerHTML = dealerCard.value;
   dealerCardSuit.innerHTML = dealerCard.suit;

   if (playerCard.suit === `♠` || playerCard.suit === `♣`) {
      playerCardEl.style.color = `black`;
   } else {
      playerCardEl.style.color = `red`;
   };

   if (dealerCard.suit === `♠` || dealerCard.suit === `♣`) {
      dealerCardEl.style.color = `black`;
   } else {
      dealerCardEl.style.color = `red`;
   };

};
 

 function updateDeckCount () {
   playerDeckEl.innerHTML = playerDeck.length;
   dealerDeckEl.innerHTML = dealerDeck.length;
 };

 
 function drawCard(playerDeck, dealerDeck) {
   let playerCard = playerDeck.shift();
   let dealerCard = dealerDeck.shift();
    
    cardsInPlay.push(playerCard);
    cardsInPlay.push(dealerCard);

    showCards(cardsInPlay);
    
    compareValue();
 };

 function war() {
   for (let i = 0; i < 4; i++) {
      let playerWarCard = playerDeck.shift();
      let dealerWarCard = dealerDeck.shift();

      cardsInPlay.push(playerWarCard, dealerWarCard);
   }
   console.log(cardsInPlay);

   if (values.indexOf(cardsInPlay[cardsInPlay.length - 2].value) > values.indexOf(cardsInPlay[cardsInPlay.length - 1].value)) {
      playerDeck.push(...cardsInPlay);
      console.log(playerDeck.length, dealerDeck.length)
      
    } else if (values.indexOf(cardsInPlay[cardsInPlay.length - 2].value) < values.indexOf(cardsInPlay[cardsInPlay.length - 1].value)) {
       dealerDeck.push(...cardsInPlay);
       console.log(playerDeck.length, dealerDeck.length)

      
   } else {war()};

   showCards(cardsInPlay);
 };

 function checkWinner(playerDeck, dealerDeck) {
    if (playerDeck.length >= 32) {
      gameOn = false;
      h1.innerHTML = `The Player wins the War!`;
      body.style.backgroundColor = `blue`;
    }
    
    if (dealerDeck.length >= 32) {
      gameOn = false;
      h1.innerHTML = `The Dealer wins the War!`
      body.style.backgroundColor = `green`;
    }
 };


 drawBtn.addEventListener(`click`,function () {
   if (gameOn) drawCard(playerDeck, dealerDeck);
   
 });

 playBtn.addEventListener(`click`,init);

 rulesBtn.addEventListener(`click`, function() {
   modalContainer.classList.remove(`hidden`);
   gameboard.classList.add(`hidden`);

 });

 closeBtn.addEventListener(`click`, function () {
   modalContainer.classList.add(`hidden`);
   if (clickCount > 0) gameboard.classList.remove(`hidden`);

 });
