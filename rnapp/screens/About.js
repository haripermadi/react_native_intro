import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
} from 'react-native'

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.aboutTitle}>About Page</Text>
        <Image
          style={styles.stretch}
          source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/200px-Magic_the_gathering-card_back.jpg'}}
        />
        <Text>
          Magic:The Gathering is a fantasy card game by Richard Garfield, Ph.D. and Wizards of the Coast centered on a “color wheel” 
          in which five distinct colors in a particular order represent five different flavors of magic. 
          How this works in actual gameplay is irrelevant to this post, which instead exists to explore the philosophy of the MTG color 
          wheel, and how that philosophy is a near-enough-to-be-thought-provoking match for reality.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    alignItems: 'center',
    backgroundColor: '#7efff5',
    height: '100%'
  },
  stretch: {
    width: 200,
    height: 300
  },
  aboutTitle: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20
  }
})

export default About;