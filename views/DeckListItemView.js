import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function DeckListItemView({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>Deck name</Text>
      <Text>x cards</Text>
    </TouchableOpacity>
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