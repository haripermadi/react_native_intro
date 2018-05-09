/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import Home from './screens/Home'
import About from './screens/About'
import Detail from './screens/Details'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
const RootStack = createStackNavigator ({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Details: {
    screen: Detail
  }
},
{
  initialRouteName: 'Home'
})

export default class App extends Component{
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to Magic: The Gathering!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Collect the wizards and rule the world!
      //   </Text>
      //   <Home/>
      // </View>
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
