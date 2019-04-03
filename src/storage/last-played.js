import { AsyncStorage } from 'react-native';
import { BASE_STORAGE_KEY } from './';

const LAST_PLAYED_QUIZ_KEY = `${BASE_STORAGE_KEY}:last-played-quiz`;

let lastPlayedQuizMemory = null;

async function getLastPlayedQuiz() {
  try {
    if (!lastPlayedQuizMemory) {
      const lastPlayedQuizString = await AsyncStorage.getItem(LAST_PLAYED_QUIZ_KEY);
      lastPlayedQuizMemory = JSON.parse(lastPlayedQuizString);
    }
    return lastPlayedQuizMemory || {};
  } catch (error) {
    console.error(error);
  }
}

async function saveLastPlayedQuiz(dateTime) {
  try {
    await AsyncStorage.setItem(LAST_PLAYED_QUIZ_KEY, JSON.stringify({ dateTime }));
    lastPlayedQuizMemory = dateTime;
    return dateTime;
  } catch (error) {
    console.error(error);
  }
}

export {
  getLastPlayedQuiz,
  saveLastPlayedQuiz,
};
