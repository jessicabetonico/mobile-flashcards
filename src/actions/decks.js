import { getDecks, saveDeck, saveCardToDeck } from '../storage/decks';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD_DECK = 'ADD_CARD_DECK';

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function handleReceiveDecks() {
  return async (dispatch) => {
    return getDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks));
      });
  }
}

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck(deck) {
  return async (dispatch) => {
    return saveDeck(deck)
      .then((deckResult) => {
        dispatch(addDeck(deckResult));
      });
  };
}

function addCardDeck(deck) {
  return {
    type: ADD_CARD_DECK,
    deck,
  }
}

export function handleAddCardDeck(deckId, card) {
  return async (dispatch) => {
    return saveCardToDeck(deckId, card)
      .then((deckResult) => {
        dispatch(addCardDeck(deckResult))
      });
  }
}
