import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/core/store'
import Routes from './src/views/routes'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{ flex: 1 }}>
          <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#F5FCFF' }}/>
          <Routes />
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
