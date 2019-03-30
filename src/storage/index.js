import { AsyncStorage } from 'react-native';

const BASE_STORAGE_KEY = '@ModileFlashCards16';
const DECKS_KEY = `${BASE_STORAGE_KEY}:decks`;

let decks = null;

async function getDecks() {
  try {
    if (!decks) {
      const decksString = await AsyncStorage.getItem(DECKS_KEY);
      decks = JSON.parse(decksString);
    }
    return decks || {};
  } catch (error) {
    console.error(error);
  }
}

async function saveDeck(deck) {
  try {
    decks = await getDecks();

    deck = {
      ...deck,
      questions: [],
    };
    decks = {
      ...decks,
      [deck.title]: deck,
    };
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
    return deck;
  } catch (error) {
    console.error(error);
  }
}

export {
  getDecks,
  saveDeck,
};
