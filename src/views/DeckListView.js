import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import DeckListItemView from './DeckListItemView';
import { handleReceiveDecks } from '../actions/decks';
import { handleChangeTimeQuizRemember } from '../utils/quiz-remember';

class DeckListView extends React.Component {
  componentDidMount() {
    const { receiveDecks } = this.props;
    receiveDecks();
    handleChangeTimeQuizRemember();
  }

  render() {
    const { decks, navigation } = this.props;
    return (
      <FlatList style={styles.container}
        ItemSeparatorComponent={({ highlighted }) => (
          <View style={[styles.separator, highlighted]} />
        )}
        data={decks}
        keyExtractor={(deckId) => `${deckId}`}
        renderItem={({ item: deckId}) => (
          <DeckListItemView
            deckId={deckId}
            onPress={() => navigation.navigate('DeckDetails', {
              deckId,
            })}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#000',
  },
  separator: {
    marginTop: 1,
  },
});

function mapStateToProps({ decks }) {
  return {
    decks: decks ? Object.keys(decks) : {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveDecks: () => dispatch(handleReceiveDecks()),
  };
}

const ConnectedDeckListView = connect(mapStateToProps, mapDispatchToProps)(DeckListView);

export default ConnectedDeckListView;
