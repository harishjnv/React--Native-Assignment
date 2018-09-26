import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import AppContainer from './App/Container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redcers from './App/reducers/reducers';

let store =createStore(redcers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AppContainer/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent("react native reduxapp",()=>AppContainer)