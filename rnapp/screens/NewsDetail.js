import React, { Component } from 'react';
import {WebView} from 'react-native'
class NewsDetail extends Component {
  static navigationOptions = {
    title: 'Back',
    headerStyle: {
      backgroundColor: '#EA2027',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const urlNews= this.props.navigation.getParam('url')
    return (
    <WebView
      source={{uri: urlNews}}
    />
    );
  }
}

export default NewsDetail;