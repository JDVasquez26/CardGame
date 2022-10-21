/*
Write the following three classes. 
Remember that each class should have a constructor that 
initializes the properties. Some classes might also have methods
 that you will need to implement. Be sure to use this when referring to a property or method.

Card
// Write a Card class with two properties: rank and suit.

Hand
A Hand has one property: an array of cards.

addCard(card) will add the given card to the hand.

playCard(card) will remove and return the specified card from the hand. It should return null if the card is not in the hand.

Deck
A Deck has an array of possible card ranks, an array of possible card suits, and an array of cards.

generateCards() will populate the deck with an initial array of cards.

shuffleCards() will shuffle the cards in the deck. Search online for a shuffle function. You do not need to come up with this yourself.

draw() will remove and return a card from the deck.

deal(numHands, cardsPerHand) will deal cardsPerHand cards to numHands hands. 

Reminder: Check in with an instructor after completing Phase 1. Make sure that you have tested everything thoroughly using the browser console and debugging tools.

  */

//Write a Card class with two properties: rank and suit.
/*Notes:
The most successful and universally recognized deck of cards is 
that based on a complement of 52, divided into four suits, each 
containing 13 ranks, so that each card is uniquely identifiable by suit and rank. */




//Write a Card class with two properties: rank and suit.
class Card { 
    constructor(rank, suit) {
        this.rank = rank;  //Ranks are indicated by numerals from A(1) to 13 (1-10, jack-11, queen -12, king-13)
        this.suit = suit; //four suits (spades, clubs, hearts, and diamonds)
    }
}



//A Hand has one property: an array of cards.
class Hand {
    constructor() {
        this.arrOfCards = [];
    }
    //addCard(card) will add the given card to the hand.
    addCard(card) {
        this.arrOfCards.push(card);
    }
    //playCard(card) will remove and return the specified card from the hand. It should return null if the card is not in the hand.
    playCard(card) {
        const indexofCard = this.arrOfCards.indexOf(card);
         if (indexofCard > -1) { // only splice array when item is found;
             this.arrOfCards.splice(indexofCard, 1); // 2nd parameter means remove one item only; splice returns an array of the things that got removed, not a single card
             return card //returning the card once it is removed
        }

        return null;
    }
}

const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["spades", "diamonds", "clubs", "hearts"];

//Rendering is taking code and making visible on screen, related to data structure, but not the same as the data structure


class Deck { //needs cards, what class does it need to "do its job/work"
    constructor(arrOfRanks, arrOfSuits, arrOfCards) {
        this.arrOfRanks = arrOfRanks; //const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.arrOfSuits = arrOfSuits; //const suits = ["spades", "diamonds", "clubs", "hearts"];
        this.arrOfCards = arrOfCards; //generateCards()
    }
    //will populate the deck with an initial array of cards.
    generateCards() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                //let firevsfire = new Battle(fireDragon, fireDragon);
                let card = new Card(ranks[j], suits[i]);
               // let card = { Rank: ranks[j], Suit: suits[i] }; //directly add to array of cards  //use card class  //use loop to populate the card rank and card suits
                this.arrOfCards.push(card); //CARD OBJECT PUSHED INTO DECK(ARRAY OF CARDS)
                
            }
        }
    }


    //will shuffle the cards in the deck. Search online 
    //for a shuffle function. You do not need to come up with this yourself.
    //https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
    //
    shuffleCards() {
        // for 1000 turns
        // switch the values of two random cards
        for (let i = 0; i < 1000; i++) {
            let location1 = Math.floor((Math.random() * this.arrOfCards.length));
            let location2 = Math.floor((Math.random() * this.arrOfCards.length));
            let tmp = this.arrOfCards[location1]; //temp storage to know where to card is swapping 

            this.arrOfCards[location1] = this.arrOfCards[location2];
            this.arrOfCards[location2] = tmp;
        }

    }
    //will remove and return a card from the deck.
    //Once shuffled, most decks are dealt from the top down, like a stack. 
//And that means that we can levarage the Array's pop() method in order to deal cards.
    draw(card) {
        return this.arrOfCards.pop();
    }

    //deal(numHands, cardsPerHand) will deal cardsPerHand cards to numHands hands.
    //* Deal out random cards to and return an array of Hands. 
    deal(numHands, cardsPerHand) {
        const hands = [];  //
    for (let i = 0; i < numHands; i++) {   //
      let hand = new Hand();                        //
      for (let j = 0; j < cardsPerHand; j++) {          //
        hand.addCard(this.draw());      //
      }
      hands.push(hand); //
    }
    return hands;

    }

}
