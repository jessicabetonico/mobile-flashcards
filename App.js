import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/reducers';
import AppNavigator from './src/navigator';

const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
