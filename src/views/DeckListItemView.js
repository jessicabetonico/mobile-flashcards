import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import DeckItemView from './DeckItemView';

export default function DeckListItemView({ deckId, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <DeckItemView deckId={deckId} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
});
