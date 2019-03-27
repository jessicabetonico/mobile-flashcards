import React from 'react';
import { View, StatusBar } from 'react-native';

import AppNavigator from './navigator';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
