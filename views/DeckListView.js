import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import DeckListItemView from './DeckListItemView';

export default function DeckListView({ navigation }) {
  return (
    <View style={styles.container}>
      {<DeckListItemView onPress={() => navigation.navigate('DeckDetails')} />}
      {<DeckListItemView />}
      {<DeckListItemView />}
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
