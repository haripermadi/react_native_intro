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
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import Home from './screens/Home'
import About from './screens/About'
import Detail from './screens/Details'
import News from './screens/News'
import NewsDetail from './screens/NewsDetail'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Provider} from 'react-redux'
import store from './store/index'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
const HomePage = createStackNavigator ({
  Home: {
    screen: Home
  },
  Details: {
    screen: Detail
  }
})

const NewsPage = createStackNavigator ({
  News: {
    screen: News
  },
  NewsDetail: {
    screen: NewsDetail
  }
})

const AboutPage = createStackNavigator ({
  About: {
    screen: About
  }
})

const TabRoot =  createBottomTabNavigator(
  {
    Home: HomePage,
    News: NewsPage,
    About: AboutPage
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if(routeName === 'Home') {
          iconName = `home`
        } 
        else if(routeName === 'About') {
          iconName =`info${focused ? '' : '-circle'}`
        } 
        else if(routeName === 'News') {
          iconName =`newspaper-o`
        }
        return <FontAwesome name={iconName} size={25} color={tintColor}/>
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  },
);

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
      <Provider store={store}>
        <TabRoot/>
      </Provider>
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
