import { getDecks, saveDeck } from '../storage';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';

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
