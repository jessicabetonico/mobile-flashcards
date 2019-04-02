import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import DeckItemView from './DeckItemView';

function DeckDetailsView({ deck, deckId, navigation }) {
  const deckIdParam = navigation.getParam('deckId', deckId);

  function handleStartQuiz() {
    if (deck.questions.length > 0) {
      navigation.navigate('Quiz', { deckId: deckIdParam });
    }
  }

  function handleAddCard() {
    navigation.navigate('QuestionNew', { deckId: deckIdParam });
  }

  return (
    <View style={styles.container}>
      <DeckItemView deckId={deckIdParam} />
      <View>
        <TouchableOpacity style={styles.addCardButton} onPress={handleAddCard}>
          <Text style={styles.textAddCardButton}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startQuizButton} onPress={handleStartQuiz}>
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

function mapStateToProps({ decks }, { navigation }) {
  const deckId = navigation.getParam('deckId');
  return {
    deck: decks[deckId],
  };
}

const ConnectedDeckDetailsView = connect(mapStateToProps)(DeckDetailsView);

export default ConnectedDeckDetailsView;
