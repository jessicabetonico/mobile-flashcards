import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DeckItemView from './DeckItemView';

export default function DeckDetailsView({ deckId, navigation, onAddCard, onStartQuizCard }) {
  const deckIdParam = navigation.getParam('deckId', deckId);
  return (
    <View style={styles.container}>
      <DeckItemView deckId={deckIdParam} />
      <TouchableOpacity onPress={() => navigation.navigate('QuestionNew')}>
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
