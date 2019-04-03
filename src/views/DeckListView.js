import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList, StatusBar, Text } from 'react-native';

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
    if (decks.length === 0) {
      return (
        <View style={styles.containerEmpty}>
          <Text>No decks added</Text>
        </View>
      )
    }

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
  },
  containerEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
});

function mapStateToProps({ decks }) {
  return {
    decks: Object.keys(decks ? decks : {}),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveDecks: () => dispatch(handleReceiveDecks()),
  };
}

const ConnectedDeckListView = connect(mapStateToProps, mapDispatchToProps)(DeckListView);

export default ConnectedDeckListView;
