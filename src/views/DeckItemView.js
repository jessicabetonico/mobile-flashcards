import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export function DeckItemView({ deck }) {
  const { title, questions } = deck;
  return (
    <View style={styles.container}>
      <Text style={styles.deckTitle}>{title}</Text>
      <Text style={styles.deckQntCards}>{questions ? questions.length : 0} cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  deckTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
  deckQntCards: {
    marginTop: 4,
    fontSize: 16,
    color: 'gray',
  }
});

function mapStateToProps({ decks }, { deckId }) {
  return {
    deck: decks[deckId],
  };
}

const ConnectedDeckItemView = connect(mapStateToProps)(DeckItemView);

export default ConnectedDeckItemView;
