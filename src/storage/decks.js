import { AsyncStorage } from 'react-native';
import { BASE_STORAGE_KEY } from './';

const DECKS_KEY = `${BASE_STORAGE_KEY}:decks`;

let decksMemory = null;

async function getDecks() {
  try {
    if (!decksMemory) {
      const decksString = await AsyncStorage.getItem(DECKS_KEY);
      decksMemory = JSON.parse(decksString);
    }
    return decksMemory || {};
  } catch (error) {
    console.error(error);
  }
}

async function saveDeck(deck) {
  try {
    const decksOld = await getDecks();

    deck = {
      ...deck,
      questions: deck.questions ? deck.questions : [],
    };
    decks = {
      ...decksOld,
      [deck.title]: deck,
    };
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
    decksMemory = decks;
    return deck;
  } catch (error) {
    console.error(error);
  }
}

async function saveCardToDeck(deckId, card) {
  try {
    let decks = await getDecks();

    const deck = decks[deckId];
    if (deck) {
      let newDeck = {
        ...deck,
        questions: [...deck.questions, card],
      };
      return saveDeck(newDeck);
    }
    return deck;
  } catch (error) {
    console.error(error);
  }
}

export {
  getDecks,
  saveDeck,
  saveCardToDeck,
};
