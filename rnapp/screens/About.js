import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView
} from 'react-native'

class About extends Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: '#0c2461',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
  };
  render() {
    return (
      <ScrollView>
      <View  style={styles.container}>
        <Text style={styles.aboutTitle}>About Page</Text>
        <Image
          style={styles.stretch}
          source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/200px-Magic_the_gathering-card_back.jpg'}}
        />
        <Text style={styles.text}>
          Magic:The Gathering is a fantasy card game by Richard Garfield, Ph.D. and Wizards of the Coast centered on a “color wheel” 
          in which five distinct colors in a particular order represent five different flavors of magic. 
          How this works in actual gameplay is irrelevant to this post, which instead exists to explore the philosophy of the MTG color 
          wheel, and how that philosophy is a near-enough-to-be-thought-provoking match for reality.
        </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    alignItems: 'center',
    backgroundColor: '#6a89cc',
    height: '100%',
    padding: 10
  },
  stretch: {
    width: 200,
    height: 300,
    marginBottom: 20
  },
  aboutTitle: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    color: 'white'
  },
  text: {
    color: 'white',
    padding: 5,
    fontSize: 15,
    textAlign: 'center'
  }
})

export default About;