import React, { Component } from 'react';
import {WebView} from 'react-native'

class Cardweb extends Component {
  static navigationOptions = {
    title: 'Back',
    headerStyle: {
      backgroundColor: '#0c2461',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <WebView
      source={{uri: 'https://magic.wizards.com/en'}}
    />
    );
  }
}

export default Cardweb;