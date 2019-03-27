import * as React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, HeaderBackButton } from 'react-navigation';

import DeckListView from '../views/DeckListView';
import DeckNewView from '../views/DeckNewView';
import QuizView from '../views/QuizView';
import QuestionNewView from '../views/QuestionNewView';
import DeckDetailsView from '../views/DeckDetailsView';

const MainTab = createBottomTabNavigator({
  DeckList: {
    screen: DeckListView,
  },
  DeckNew: {
    screen: DeckNewView
  },
});

const DeckStack = createStackNavigator({
  DeckDetails: {
    screen: DeckDetailsView,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    }),
  },
  Quiz: {
    screen: QuizView,
  },
  QuestionNew: {
    screen: QuestionNewView,
  },
});

const AppContainer = createStackNavigator({
	MainTab: {
    screen: MainTab,
	},
	DeckStack: {
		screen: DeckStack,
	}
}, {
  headerMode: 'none',
});


export default createAppContainer(AppContainer);
