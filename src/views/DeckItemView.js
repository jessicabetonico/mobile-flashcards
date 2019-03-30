import * as React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export function DeckItemView({ deck }) {
  const { title, questions } = deck;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{questions ? questions.length : 0} cards</Text>
    </View>
  );
}

function mapStateToProps({ decks }, { deckId }) {
  return {
    deck: decks[deckId],
  };
}

const ConnectedDeckItemView = connect(mapStateToProps)(DeckItemView);

export default ConnectedDeckItemView;
