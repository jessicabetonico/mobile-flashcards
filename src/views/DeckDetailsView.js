import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DeckItemView from './DeckItemView';

export default function DeckDetailsView({ deckId, navigation, onAddCard, onStartQuizCard }) {
  const deckIdParam = navigation.getParam('deckId', deckId);
  return (
    <View style={styles.container}>
      <DeckItemView deckId={deckIdParam} />
      <View>
        <TouchableOpacity style={styles.addCardButton} onPress={() => navigation.navigate('QuestionNew', {
          deckId: deckIdParam,
        })}>
          <Text style={styles.textAddCardButton}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startQuizButton} onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.textStartQuizButton}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 48,
  },
  addCardButton: {
    padding: 8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
  },
  textAddCardButton: {
    color: 'black',
  },
  startQuizButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
  },
  textStartQuizButton: {
    color: 'white',
  },
});
