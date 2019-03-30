import { RECEIVE_DECKS, ADD_DECK } from '../actions/decks';

export default function decksReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...action.decks,
      };
    case ADD_DECK:
      const { deck } = action;
      return {
        ...state,
        [deck.title]: {
          ...deck,
        },
      };
    default:
      return {
        ...state,
      }
  }
}